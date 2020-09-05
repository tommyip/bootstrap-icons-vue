import * as icons from './icons';

export const BootstrapIconsPlugin = {
  install: (app, _options) => {
    for (const icon in icons) {
      app.component(icon, icons[icon]);
    }
  },
};

export const iconNames = Object.keys(icons);
