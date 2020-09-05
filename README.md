<img src="./assets/banner.jpg">
<h1 align="center">Bootstrap Icons Vue</h1>

> Bootstrap Icons are designed to work with Bootstrap components, from form controls to navigation. But, they'll work in just about any project, too. That's because Bootstrap Icons are SVGs, so they scale quickly and easily and can be styled with CSS. -- [Bootstrap Icons]

This package provides bootstrap icons as Vue components.

Built from Bootstrap Icons v1.0.0. **Requires Vue 3.**

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
import { BIconBatteryFull, BIconArrow90degDown, BIconBookmark } from 'bootstrap-icons-vue`;

const app = createApp(/** App **/);
app.component('BIconBatteryFull', BIconBatteryFull);
app.component('BIconArrow90degDown', BIconArrow90degDown);
app.component('BIconBookmark', BIconBookmark);
app.mount('#app');
```

Or for just one component:

```js
import { BIconBatteryFull, BIconArrow90degDown, BIconBookmark } from 'bootstrap-icons-vue`;

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

Comming soon...

[Bootstrap Icons]: https://icons.getbootstrap.com/
