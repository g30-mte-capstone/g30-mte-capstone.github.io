import type { LogStatus } from "@/lib/logs";

const labels: Record<LogStatus, string> = {
  "on-track": "On track",
  "at-risk": "At risk",
  blocked: "Blocked",
  complete: "Complete",
};

export default function StatusChip({ status }: { status: LogStatus }) {
  const accent = status === "on-track" || status === "complete";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs tracking-wide ${
        accent
          ? "border-accent-2 text-accent-2"
          : "border-accent text-accent"
      }`}
    >
      {labels[status]}
    </span>
  );
}
