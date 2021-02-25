<img src="./assets/banner.jpg">
<h1 align="center">Bootstrap Icons Vue</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/bootstrap-icons-vue">
    <img src="https://img.shields.io/npm/v/bootstrap-icons-vue?color=blue" alt="NPM">
  </a>
  <a href="https://icons.getbootstrap.com/">
    <img src="https://img.shields.io/badge/Bootstrap%20Icons-1.4.0-blueviolet" alt="Bootstrap Icons">
  </a>
  <a href="https://github.com/vuejs/vue-next">
    <img src="https://img.shields.io/badge/Vue.js-3.x-success" alt="Vue JS">
  </a>
</p>

> Bootstrap Icons are designed to work with Bootstrap components, from form controls to navigation. But, they'll work in just about any project, too. That's because Bootstrap Icons are SVGs, so they scale quickly and easily and can be styled with CSS. -- [Bootstrap Icons]

This package provides bootstrap icons as Vue components.

Built from Bootstrap Icons v1.4.0. **Requires Vue 3.**

## Usage

All icons are exported following the `PascalCase` naming convention, prefixed with `BIcon`. For example, the icon `battery-full` is exported as `BIconBatteryFull`, the icon `arrow-90deg-down` is exported as `BIconArrow90degDown`, etc. Vue allows you to refer to them in templates using either `PascalCase` or `kebab-case`.

```vue
<template>
  <BIconArrow90degDown />
  <!-- Or -->
  <b-icon-arrow-90deg-down />
</template>
```

Each icon is `1em` in width and height. They can be styled by inheriting from their parent element, or receiving class or style attribute directly.

You can find the full list of available icons at https://icons.getbootstrap.com/.

### With module bundlers

First install the package using your package manager of choice:

```sh
yarn add bootstrap-icons-vue

# or

npm install bootstrap-icons-vue
```

Then import the icons using one of the methods below:

**1. Importing specific icons**

Making them globally available for an app:

```js
import { createApp } from 'vue';
import { BIconBatteryFull, BIconArrow90degDown, BIconBookmark } from 'bootstrap-icons-vue';

const app = createApp(/** App **/);
app.component('BIconBatteryFull', BIconBatteryFull);
app.component('BIconArrow90degDown', BIconArrow90degDown);
app.component('BIconBookmark', BIconBookmark);
app.mount('#app');
```

Or for just one component:

```js
import { BIconBatteryFull, BIconArrow90degDown, BIconBookmark } from 'bootstrap-icons-vue';

export default {
  components: {
    BIconBatteryFull,
    BIconArrow90degDown,
    BIconBatteryFull,
  },
  // ...
};
```

**2. Importing all icons**

```js
import { createApp } from 'vue';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

const app = createApp(/** App **/);
app.use(BootstrapIconsPlugin);
app.mount('#app');
```

Note that this registers all icon components to the app instance, unused icons will not be tree-shakable.

### Browser

Include the scripts from CDN as follows:

```html
<script src="https://unpkg.com/vue@3.0.6"></script>
<script src="https://unpkg.com/bootstrap-icons-vue@0.6.0"></script>
```

Vue 3 does not have a global application instance, so it is not possible to install the icons components automatically. Instead the browser build exports  a plugin `BootstrapIconsVue` to be installed:

```js
const app = Vue.createApp(/** App **/);
app.use(BootstrapIconsVue);
app.mount('#app');
```

## Development

Install dependencies with `yarn install` then generate icon files with `yarn build`. To test the browser build, run `yarn dev:cdn`. With the vite app, first link the library by running `yarn link` in this directory, then `yarn link bootstrap-icons-vue` in `./dev-vite`, finally run `yarn dev:vite` back in this directory.

The `upgrade.sh` script upgrades everything and update the docs with new version specifiers.

[Bootstrap Icons]: https://icons.getbootstrap.com/
