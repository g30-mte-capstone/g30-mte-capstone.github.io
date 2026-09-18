import { site } from "@/config/nav";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="flex flex-col gap-1 py-6 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          {site.name} · {site.course}
        </p>
        <p>{site.school}</p>
      </div>
    </footer>
  );
}
