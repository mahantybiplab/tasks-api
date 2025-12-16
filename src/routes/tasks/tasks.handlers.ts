import type { AppRouteHandler } from "@/lib/types";

import db from "@/db";

import type { listRoute } from "./tasks.routes";

export const list: AppRouteHandler<listRoute> = async (c) => {
  const tasks = await db.query.tasks.findMany();

  return c.json(tasks);
};
