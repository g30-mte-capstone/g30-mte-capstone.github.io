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
        Project Homepage
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Progress notes for a University of Waterloo mechatronics capstone
        project. Project details will land here.
      </p>

      <section className="mt-14">
        <h2 className="text-sm uppercase tracking-[0.18em] text-muted">
            Quick Links
        </h2>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/logs/" className="text-muted underline underline-offset-4 hover:text-accent-2">
            All logs
          </Link>
          <Link href="/project/" className="text-muted underline underline-offset-4 hover:text-accent-2">
            Project overview
          </Link>
          <Link href="/team/" className="text-muted underline underline-offset-4 hover:text-accent-2">
            Team
          </Link>
        </div>
      </section>

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
