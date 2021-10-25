require("./bootstrap");

require("alpinejs");

import { createApp } from "vue";
import routes from "./routes/";

createApp({}).use(routes).mount("#app");
