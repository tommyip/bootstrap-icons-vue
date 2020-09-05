<template>
  <h2>All icons via dynamic component tag</h2>
  <div class="icons-grid">
    <component
      v-for="icon in icons"
      :is="icon"
      :key="icon"
    />
  </div>
</template>

<script>
import * as exports from 'bootstrap-icons-vue';

export default {
  name: 'AllIcons',
  components: {
    ...exports,
  },
  setup() {
    const icons = exports.iconNames;

    return {
      icons,
    };
  },
};
</script>
