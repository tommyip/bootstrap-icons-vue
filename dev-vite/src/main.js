import { createApp } from "vue";
import App1 from "./App1.vue";
import App2 from "./App2.vue";
import "./index.css";

import {
  BIconBookmarkCheck,
  BIconChatDotsFill,
  BIconCircleHalf,
  BootstrapIconsPlugin,
} from "bootstrap-icons-vue";

const app1 = createApp(App1);
app1.use(BootstrapIconsPlugin);
app1.mount("#app1");

const app2 = createApp(App2);
app2.component("BIconBookmarkCheck", BIconBookmarkCheck);
app2.component("BIconChatDotsFill", BIconChatDotsFill);
app2.component("BIconCircleHalf", BIconCircleHalf);
app2.mount("#app2");
