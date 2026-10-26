import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
};

export default function DocsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Documents</h1>
      <p className="mt-3 text-muted">
        Proposals, reviews, slides, and reports will be posted here as they
        are submitted.
      </p>

      <a
        href="/docs/10-19-preliminary-design-presentation.pdf"
        target="_blank"
        rel="noreferrer"
        className="mt-8 block rounded-lg border border-border bg-surface/60 px-5 py-4 transition-colors hover:border-accent-2"
      >
        <span className="font-medium">Preliminary Design Presentation</span>
        <span className="mt-1 block text-sm text-muted">
          October 19 · PDF
        </span>
      </a>
    </div>
  );
}
