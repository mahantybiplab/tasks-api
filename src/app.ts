import CreateApp from "@/lib/create-app";

import configureOpenAPI from "./lib/configure-open-api";

const app = CreateApp();
configureOpenAPI(app);
export default app;
