<template>
  <h2>All icons via dynamic component tag</h2>
  <div class="icons-grid">
    <component
      v-for="icon in icons"
      :is="icon.name"
      :key="icon.name"
    />
  </div>
</template>

<script>
import * as icons from 'bootstrap-icons-vue';

export default {
  name: 'AllIcons',
  components: {
    ...icons,
  },
  setup() {
    return {
      icons,
    };
  },
};
</script>
