import type { NextApiRequest as req, NextApiResponse as res } from "next";

const data: { message: string } = { message: "infinity demo api" } as const;

export default function handler(req: req, res: res<typeof data>) {
  res.status(200).json(data);
}
