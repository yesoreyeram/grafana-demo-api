import type { NextApiRequest as req, NextApiResponse as res } from "next";

const data: { name: string; id: string; short_code: string }[] = [
  { name: "Production", id: "prod", short_code: "pd" },
  { name: "Staging", id: "staging", short_code: "st" },
  { name: "Test", id: "test", short_code: "te" },
  { name: "Staging", id: "dev", short_code: "dv" },
] as const;

export default function handler(req: req, res: res<typeof data>) {
  res.status(200).json(data);
}
