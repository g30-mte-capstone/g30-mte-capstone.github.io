import Link from "next/link";
import LogCard from "@/components/LogCard";
import { site } from "@/config/nav";
import { getLogs } from "@/lib/logs";

export default function HomePage() {
  const [latest] = getLogs();

  return (
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-accent-2">
        {site.course}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        Group 30 project log
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Progress notes for a University of Waterloo mechatronics capstone
        project. Project details will land here as the brief firms up.
      </p>

      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <Link href="/logs/" className="text-accent-2 underline underline-offset-4">
          All logs
        </Link>
        <Link href="/project/" className="text-muted underline underline-offset-4 hover:text-fg">
          Project overview
        </Link>
        <Link href="/team/" className="text-muted underline underline-offset-4 hover:text-fg">
          Team
        </Link>
      </div>

      <section className="mt-14">
        <h2 className="text-sm uppercase tracking-[0.18em] text-muted">
          Latest log
        </h2>
        <div className="mt-4">
          {latest ? (
            <LogCard log={latest} />
          ) : (
            <p className="text-muted">No logs published yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
