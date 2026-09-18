import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
};

const members = [
  { name: "Member 1", role: "Role TBD" },
  { name: "Member 2", role: "Role TBD" },
  { name: "Member 3", role: "Role TBD" },
  { name: "Member 4", role: "Role TBD" },
];

export default function TeamPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Team</h1>
      <p className="mt-3 text-muted">
        Group 30, Mechatronics Engineering Capstone.
      </p>

      <ul className="mt-8 divide-y divide-border border-y border-border">
        {members.map((member) => (
          <li
            key={member.name}
            className="flex items-baseline justify-between gap-4 py-4"
          >
            <span className="font-medium">{member.name}</span>
            <span className="text-sm text-muted">{member.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
