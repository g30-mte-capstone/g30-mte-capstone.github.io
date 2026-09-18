import Link from "next/link";
import type { LogMeta } from "@/lib/logs";
import { formatLogDate } from "@/lib/logs";
import StatusChip from "./StatusChip";

export default function LogCard({ log }: { log: LogMeta }) {
  return (
    <Link
      href={`/logs/${log.slug}/`}
      className="block rounded-lg border border-border bg-surface/60 p-5 transition-colors hover:border-accent"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm text-muted">{formatLogDate(log.date)}</p>
        <StatusChip status={log.status} />
      </div>
      <h2 className="mt-2 text-xl font-semibold tracking-tight">{log.title}</h2>
      {log.tags.length > 0 && (
        <p className="mt-3 text-sm text-muted">{log.tags.join(" · ")}</p>
      )}
    </Link>
  );
}
