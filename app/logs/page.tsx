import type { Metadata } from "next";
import LogCard from "@/components/LogCard";
import { getLogs } from "@/lib/logs";

export const metadata: Metadata = {
  title: "Logs",
};

export default function LogsPage() {
  const logs = getLogs();

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Logs</h1>
      <p className="mt-3 text-muted">
        Newest first. More than one entry per week is fine.
      </p>

      {logs.length === 0 ? (
        <p className="mt-8 text-muted">No logs published yet.</p>
      ) : (
        <div className="mt-8 flex flex-col gap-4">
          {logs.map((log) => (
            <LogCard key={log.slug} log={log} />
          ))}
        </div>
      )}
    </div>
  );
}
