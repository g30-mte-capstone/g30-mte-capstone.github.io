import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Footer, Header } from "@/components/layout";
import { site } from "@/config/nav";
import "./styles.css";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [],
  },
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "dark" || stored === "light"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${plex.className} min-h-screen bg-bg text-fg antialiased`}>
        <div className="h-0.5 bg-accent" />
        <div className="mx-auto flex min-h-[calc(100vh-2px)] w-full max-w-3xl flex-col px-6">
          <Header />
          <main className="flex-1 py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
