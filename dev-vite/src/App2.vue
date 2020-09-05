<template>
  <PerComponent />
  <GlobalImport />
  <AllIcons />
</template>

<script>
import PerComponent from './components/PerComponent.vue';
import GlobalImport from './components/GlobalImport.vue';
import AllIcons from './components/AllIcons.vue';

export default {
  name: 'App2',
  components: {
    PerComponent,
    GlobalImport,
    AllIcons,
  },
};
</script>
