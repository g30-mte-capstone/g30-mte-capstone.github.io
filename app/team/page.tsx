import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
};

const members = [
  { name: "Trinity Hsu" },
  { name: "Hannah Lamarche" },
  { name: "Dennis Lee" },
  { name: "Leo You" },
];

export default function TeamPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Team</h1>
      <p className="mt-3 text-muted">
        Group 30, 2026 Mechatronics Engineering Capstone.
      </p>

      <ul className="mt-8 divide-y divide-border border-y border-border">
        {members.map((member) => (
          <li
            key={member.name}
            className="flex items-baseline justify-between gap-4 py-4"
          >
            <span className="font-medium">{member.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
