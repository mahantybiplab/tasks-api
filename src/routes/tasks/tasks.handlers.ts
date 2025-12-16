import type { AppRouteHandler } from "@/lib/types";

import type { listRoute } from "./tasks.routes";

export const list: AppRouteHandler<listRoute> = (c) => {
  return c.json([{
    name: "Learn Hono",
    done: false,
  }]);
};
