<template>
  <h2>Importing icons for current component</h2>
  <div class="icons-grid">
    <BIconBookmarkCheck />
    <BIconChatDotsFill />
    <b-icon-circle-half />
  </div>
</template>

<script>
import { BIconAlarm, BIconFileSpreadsheet, BIconArrow90degDown } from 'bootstrap-icons-vue';

export default {
  name: 'PerComponent',
  components: {
    BIconAlarm,
    BIconFileSpreadsheet,
    BIconArrow90degDown,
  },
};
</script>
