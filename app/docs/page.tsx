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
      <p className="mt-8 rounded-lg border border-border bg-surface/60 px-5 py-6 text-muted">
        No documents published yet.
      </p>
    </div>
  );
}
