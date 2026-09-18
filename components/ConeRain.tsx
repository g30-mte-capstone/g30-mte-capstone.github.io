"use client";

import { useEffect, useRef, useState } from "react";

type Cone = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  mode: "fall" | "crawl";
  crawlDir: 1 | -1;
  bounces: number;
  bob: number;
};

const GRAVITY = 0.55;
const BOUNCE = 0.62;
const FLOOR_FRICTION = 0.82;
const MAX_CONES = 28;
const BURST = 16;
const CONE_SIZE = 48;

function spawnBurst(existing: Cone[]): Cone[] {
  const now = Date.now();
  const extra: Cone[] = [];
  for (let i = 0; i < BURST; i += 1) {
    if (existing.length + extra.length >= MAX_CONES) break;
    extra.push({
      id: now + i,
      x: Math.random() * (window.innerWidth - CONE_SIZE),
      y: -CONE_SIZE - Math.random() * 120,
      vx: (Math.random() - 0.5) * 7,
      vy: Math.random() * 2,
      mode: "fall",
      crawlDir: Math.random() < 0.5 ? -1 : 1,
      bounces: 0,
      bob: Math.random() * Math.PI * 2,
    });
  }
  return existing.concat(extra);
}

export default function ConeRain() {
  const conesRef = useRef<Cone[]>([]);
  const frameRef = useRef<number>(0);
  const [cones, setCones] = useState<Cone[]>([]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.detail !== 3) return;
      event.preventDefault();
      conesRef.current = spawnBurst(conesRef.current);
      setCones(conesRef.current.slice());
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const tick = () => {
      const prev = conesRef.current;
      if (prev.length === 0) {
        frameRef.current = window.requestAnimationFrame(tick);
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;
      const next = prev
        .map((cone) => {
          const floor = height - CONE_SIZE - 4;

          if (cone.mode === "crawl") {
            const x = cone.x + cone.crawlDir * 2.4;
            const bob = cone.bob + 0.35;
            return {
              ...cone,
              x,
              y: floor + Math.sin(bob) * 2,
              bob,
            };
          }

          let { x, y, vx, vy, bounces, crawlDir } = cone;
          let mode: Cone["mode"] = cone.mode;
          vy += GRAVITY;
          x += vx;
          y += vy;

          if (x <= 0) {
            x = 0;
            vx = Math.abs(vx) * 0.7;
          } else if (x + CONE_SIZE >= width) {
            x = width - CONE_SIZE;
            vx = -Math.abs(vx) * 0.7;
          }

          if (y >= floor) {
            y = floor;
            bounces += 1;
            if (Math.abs(vy) < 3.2 || bounces >= 4) {
              mode = "crawl";
              crawlDir = x + CONE_SIZE / 2 < width / 2 ? -1 : 1;
              vx = 0;
              vy = 0;
            } else {
              vy = -Math.abs(vy) * BOUNCE;
              vx *= FLOOR_FRICTION;
            }
          }

          return { ...cone, x, y, vx, vy, bounces, mode, crawlDir };
        })
        .filter((cone) => cone.x > -CONE_SIZE - 40 && cone.x < width + 40);

      conesRef.current = next;
      setCones(next);
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameRef.current);
  }, []);

  if (cones.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
      {cones.map((cone) => (
        // Decorative overlay; next/image is unnecessary for this easter egg.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={cone.id}
          src="/cone.png"
          alt=""
          width={CONE_SIZE}
          height={CONE_SIZE}
          draggable={false}
          className="pixel-cone pointer-events-none absolute"
          style={{
            left: Math.round(cone.x),
            top: Math.round(cone.y),
            width: CONE_SIZE,
            height: CONE_SIZE,
          }}
        />
      ))}
    </div>
  );
}
