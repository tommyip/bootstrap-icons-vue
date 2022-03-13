<img src="./assets/banner.jpg">
<h1 align="center">Bootstrap Icons Vue</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/bootstrap-icons-vue">
    <img src="https://img.shields.io/npm/v/bootstrap-icons-vue?color=blue" alt="NPM">
  </a>
  <a href="https://icons.getbootstrap.com/">
    <img src="https://img.shields.io/badge/Bootstrap%20Icons-1.8.1-blueviolet" alt="Bootstrap Icons">
  </a>
  <a href="https://github.com/vuejs/vue-next">
    <img src="https://img.shields.io/badge/Vue.js-3.x-success" alt="Vue JS">
  </a>
</p>

> Free, high quality, open source icon library with over 1,500 icons. Include them anyway you like—SVGs, SVG sprite, or web fonts. Use them with or without Bootstrap in any project. -- [Bootstrap Icons]

This library provides Bootstrap icons as Vue 3.x components.

Built from Bootstrap Icons v1.8.1.

## Installation

```sh
# Using yarn
yarn add bootstrap-icons-vue

# Or npm
npm install bootstrap-icons-vue
```

Alternatively, you can use them straight from a CDN without installation.

```html
<script src="https://unpkg.com/vue@3.2.23"></script>
<script src="https://unpkg.com/bootstrap-icons-vue@1.8.1"></script>
```

## Usage

**1. Importing individual icons**

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

Or just for one component:

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

Note that this will register all icon components to the app instance, unused icons will not be tree-shakable.

**3. Import all icons (for CDN build)**

Vue 3 does not have a global application instance, so it is not possible to automatically expose the icons components. Instead you should install the provided plugin to your app instance.

```js
const app = Vue.createApp(/** App **/);
app.use(BootstrapIconsVue);
app.mount('#app');
```

### Naming convention

All icons are exported following the `PascalCase` naming convention, prefixed with `BIcon`. For example, the icon `battery-full` is exported as `BIconBatteryFull`, the icon `arrow-90deg-down` is exported as `BIconArrow90degDown`, etc. Vue allows you to refer to them in templates using either `PascalCase` or `kebab-case`.

```html
<template>
  <BIconArrow90degDown />
  <!-- Or -->
  <b-icon-arrow-90deg-down />
</template>
```

Each icon is `1em` in width and height. They can be styled by inheriting from their parent element, or receiving class or style attribute directly.

You can find the full list of available icons at https://icons.getbootstrap.com/.

## Relation to [BootstrapVue]

BootstrapVue implements Bootstrap components (including Bootstrap Icons) and grid system as Vue 2 components. bootstrap-icons-vue is **NOT** intended to be used alongside BootstrapVue, as the latter is a superset of this project. Besides, they target different major Vue version.

This library is for those who wants to use Bootstrap Icons but do not wish to pull in a massive dependency (BootstrapVue).

## Development

Install dependencies with `yarn install` then generate icon files with `yarn build`. To test the browser build, run `yarn dev:cdn`. With the vite app, first link the library by running `yarn link` in this directory, then `yarn link bootstrap-icons-vue` in `./dev-vite`, finally run `yarn dev:vite` back in this directory.

The `upgrade.sh` script upgrades everything and update the docs with new version specifiers.

[Bootstrap Icons]: https://icons.getbootstrap.com/
[BootstrapVue]: https://github.com/bootstrap-vue/bootstrap-vue
