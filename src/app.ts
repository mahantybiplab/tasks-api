import CreateApp from "@/lib/create-app";
import index from "@/routes/index.route";
import tasks from "@/routes/tasks/tasks.index";

import configureOpenAPI from "./lib/configure-open-api";

const app = CreateApp();

const routes = [
  index,
  tasks,
];

configureOpenAPI(app);

routes.forEach((route) => {
  app.route("/", route);
});

export default app;
