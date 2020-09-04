<template>
  <div class="app">
    <div class="icons-grid">
      <div
        v-for="icon in icons"
        :key="icon.name"
        class="icons-container"
      >
        <component :is="icon.name" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
import * as icons from './index';

export default {
  components: {
    ...icons,
  },
  data() {
    return {
      icons,
    };
  },
};
</script>

<style>
.app {
  font-size: 17px;
  font-family: Helvetica, sans-serif;
  color: #212121;
}

.icons-grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.icons-container {
  margin: 0.5rem;
}

.icon {
  font-size: 1.5rem;
}
</style>
