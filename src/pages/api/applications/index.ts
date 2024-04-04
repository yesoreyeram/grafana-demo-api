import type { NextApiRequest as req, NextApiResponse as res } from "next";

export const applications: {
  name: string;
  id: string;
  environments?: string[];
}[] = [
  {
    name: "Checkout",
    id: "checkout",
    environments: ["prod", "dev", "testing", "staging"],
  },
  {
    name: "Billing",
    id: "billing",
    environments: ["prod", "dev", "testing", "staging"],
  },
  {
    name: "Auth",
    id: "auth",
    environments: ["prod", "dev", "testing", "staging"],
  },
  {
    name: "Marketing",
    id: "marketing",
    environments: ["dev", "testing", "staging"],
  },
  {
    name: "Monitoring",
    id: "monitoring",
    environments: ["prod", "testing"],
  },
] as const;

export default function handler(req: req, res: res<typeof applications>) {
  res.status(200).json(applications);
}
