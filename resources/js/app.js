require("./bootstrap");

require("alpinejs");

import { createApp } from "vue";
import routes from "./routes/";

Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;

createApp({}).use(routes).mount("#app");
