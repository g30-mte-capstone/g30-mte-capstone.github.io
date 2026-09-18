"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DisconnectOutlined } from "@ant-design/icons";

const LINE = "You're not supposed to be here.";
const DELAY_MS = 5000;

export default function Lost() {
  const router = useRouter();
  const [typed, setTyped] = useState("");
  const [seconds, setSeconds] = useState(Math.ceil(DELAY_MS / 1000));

  useEffect(() => {
    let i = 0;
    const typing = window.setInterval(() => {
      i += 1;
      setTyped(LINE.slice(0, i));
      if (i >= LINE.length) window.clearInterval(typing);
    }, 42);
    return () => window.clearInterval(typing);
  }, []);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setSeconds((value) => Math.max(0, value - 1));
    }, 1000);
    const redirect = window.setTimeout(() => router.replace("/"), DELAY_MS);
    return () => {
      window.clearInterval(tick);
      window.clearTimeout(redirect);
    };
  }, [router]);

  const split = typed.startsWith("You're not")
    ? {
        before: "You're ",
        mid: typed.slice("You're ".length, "You're not".length),
        after: typed.slice("You're not".length),
      }
    : { before: typed, mid: "", after: "" };

  return (
    <div>
      <p className="text-accent">
        <DisconnectOutlined className="text-2xl" aria-hidden />
      </p>
      <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
        <span>{split.before}</span>
        <span className="text-accent">{split.mid}</span>
        <span>{split.after}</span>
        <span className="cursor-blink text-accent" aria-hidden>
          |
        </span>
      </h1>
      <p className="mt-4 text-muted">
        Sending you home in {seconds}…
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-accent-2 underline underline-offset-4"
      >
        Take me home now
      </Link>
    </div>
  );
}
