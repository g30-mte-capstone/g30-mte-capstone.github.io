import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "@/components/Markdown";
import StatusChip from "@/components/StatusChip";
import { formatLogDate, getLog, getLogs } from "@/lib/logs";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLogs().map((log) => ({ slug: log.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const log = getLog(slug);
  if (!log) return { title: "Log" };
  return { title: log.title };
}

export default async function LogPage({ params }: Props) {
  const { slug } = await params;
  const log = getLog(slug);
  if (!log) notFound();

  return (
    <article>
      <p className="text-sm text-muted">
        <Link href="/logs/" className="hover:text-fg">
          Logs
        </Link>
        <span className="mx-2">/</span>
        {formatLogDate(log.date)}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">{log.title}</h1>
        <StatusChip status={log.status} />
      </div>
      <p className="mt-3 text-sm text-muted">
        {formatLogDate(log.date)}
        {log.authors.length > 0 ? ` · ${log.authors.join(", ")}` : ""}
      </p>
      <div className="mt-10">
        <Markdown content={log.content} />
      </div>
    </article>
  );
}
