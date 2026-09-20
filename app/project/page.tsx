import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
};

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Project</h1>
      <p className="mt-3 text-muted">
        Placeholder overview until the problem statement is locked.
      </p>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Problem</h2>
          <p className="mt-2 leading-relaxed text-muted">
            The team is defining a mechatronics design problem and the
            constraints that will shape the solution.
          </p>
        </div>
      </section>
    </div>
  );
}
