"use client";

import { CloseOutlined, MenuOutlined, ToolOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/config/nav";
import ThemeToggle from "@/components/ThemeToggle";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

const iconButtonClass =
  "inline-flex h-8 w-8 items-center justify-center rounded-md text-base text-muted hover:text-fg";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 -mx-6 border-b border-border bg-bg/90 px-6 backdrop-blur">
      <div className="flex items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold tracking-tight text-accent"
        >
          <ToolOutlined className="text-base" aria-hidden />
          {site.name}
        </Link>

        <nav className="hidden items-center gap-5 text-sm sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(pathname, item.href)
                  ? "text-fg"
                  : "text-muted hover:text-fg"
              }
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            className={iconButtonClass}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-border py-3 text-sm sm:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={
                isActive(pathname, item.href)
                  ? "text-fg"
                  : "text-muted hover:text-fg"
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
