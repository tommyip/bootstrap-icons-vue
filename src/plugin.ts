import * as icons from "./icons";
import { Plugin } from "vue";

export const BootstrapIconsPlugin: Plugin = {
  install: (app, _options) => {
    for (const icon in icons) {
      app.component(icon, icons[icon]);
    }
  },
};

export const iconNames = /*#__PURE__*/ Object.keys(icons);
