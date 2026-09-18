import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const LOG_STATUSES = [
  "on-track",
  "at-risk",
  "blocked",
  "complete",
] as const;

export type LogStatus = (typeof LOG_STATUSES)[number];

export type LogMeta = {
  slug: string;
  title: string;
  date: string;
  authors: string[];
  status: LogStatus;
  tags: string[];
};

export type Log = LogMeta & {
  content: string;
};

const LOGS_DIR = path.join(process.cwd(), "content/logs");
const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;

function isStatus(value: unknown): value is LogStatus {
  return typeof value === "string" && LOG_STATUSES.includes(value as LogStatus);
}

/** Calendar date `YYYY-MM-DD` or ISO datetime, used for sort + display. */
function coerceDate(value: unknown, filename: string): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const hasTime =
      value.getUTCHours() !== 0 ||
      value.getUTCMinutes() !== 0 ||
      value.getUTCSeconds() !== 0;
    if (!hasTime) return value.toISOString().slice(0, 10);
    return value.toISOString();
  }

  if (typeof value === "string" && value.trim()) {
    const raw = value.trim();
    if (DATE_ONLY.test(raw)) return raw;

    const parsed = new Date(raw);
    if (!Number.isNaN(parsed.getTime())) {
      if (/T\d{2}:\d{2}/.test(raw) || /\d{1,2}:\d{2}/.test(raw)) {
        return parsed.toISOString();
      }
      return raw.slice(0, 10);
    }
  }

  throw new Error(
    `Log ${filename} needs a "date" in frontmatter (e.g. 2026-09-18 or 2026-09-18T14:30).`,
  );
}

function timestamp(date: string): number {
  if (DATE_ONLY.test(date)) {
    return Date.parse(`${date}T00:00:00`);
  }
  return Date.parse(date);
}

function parseLog(filename: string): Log {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(LOGS_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    date: coerceDate(data.date, filename),
    authors: Array.isArray(data.authors) ? data.authors.map(String) : [],
    status: isStatus(data.status) ? data.status : "on-track",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content: content.trim(),
  };
}

export function getLogs(): Log[] {
  if (!fs.existsSync(LOGS_DIR)) return [];

  return fs
    .readdirSync(LOGS_DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map(parseLog)
    .sort((a, b) => timestamp(b.date) - timestamp(a.date) || a.slug.localeCompare(b.slug));
}

export function getLog(slug: string): Log | undefined {
  return getLogs().find((log) => log.slug === slug);
}

export function formatLogDate(date: string): string {
  if (!date) return "";

  if (DATE_ONLY.test(date)) {
    const [year, month, day] = date.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
      timeZone: "UTC",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;

  return parsed.toLocaleString("en-US", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
