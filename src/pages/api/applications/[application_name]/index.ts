import type { NextApiRequest as req, NextApiResponse as res } from "next";
import { applications } from "./../index";

export default function handler(req: req, res: res<any>) {
  res
    .status(200)
    .json(applications.find((a) => a?.id === req?.query?.application_name));
}
