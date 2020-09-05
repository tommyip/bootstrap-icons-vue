<template>
  <IndividualIcons />
  <GlobalIndividualIcons />
  <AllIcons />
</template>

<script>
import IndividualIcons from './components/IndividualIcons.vue';
import GlobalIndividualIcons from './components/GlobalIndividualIcons.vue';
import AllIcons from './components/AllIcons.vue';

export default {
  name: 'App',
  components: {
    IndividualIcons,
    GlobalIndividualIcons,
    AllIcons,
  },
};
</script>

<style>
.icons-grid {
  display: flex;
  flex-flow: row wrap;
  margin: -0.5rem;
}

svg {
  margin: 0.5rem;
  font-size: 1.5rem;
}
</style>
