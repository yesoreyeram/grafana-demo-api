import { randomUUID } from "crypto";
import type { NextApiRequest as req, NextApiResponse as res } from "next";

const spans = [
  {
    spanID: "s1",
    parentSpanID: "",
    traceID: "t1",
    startTime: 1,
    duration: 10000,
    serviceName: "router",
    operationName: "foo",
  },
  {
    spanID: "s2",
    parentSpanID: "s1",
    traceID: "t1",
    startTime: 2,
    duration: 6000,
    serviceName: "frontend",
    operationName: "foo",
  },
  {
    spanID: "s3",
    parentSpanID: "s1",
    traceID: "t1",
    startTime: 4,
    duration: 4000,
    serviceName: "backend",
    operationName: "foo",
  },
  {
    spanID: "s4",
    parentSpanID: "s2",
    traceID: "t1",
    startTime: 3,
    duration: 1000,
    serviceName: "parsing",
    operationName: "foo",
  },
  {
    spanID: "s5",
    parentSpanID: "s2",
    traceID: "t1",
    startTime: 3,
    duration: 1500,
    serviceName: "formatting",
    operationName: "foo",
  },
  {
    spanID: "s6",
    parentSpanID: "s3",
    traceID: "t2",
    startTime: 5,
    duration: 2200,
    serviceName: "db",
    operationName: "foo",
  },
];

export default function handler(req: req, res: res<any>) {
  const startTime = +(req.query?.startTime || new Date().getTime() - 1000);
  res.status(200).json(
    spans.map((sp) => ({
      ...sp,
      startTime: startTime + sp.startTime,
      application: req?.query?.application_name,
      traceID: req?.query?.trace_id || sp.traceID,
    }))
  );
}
