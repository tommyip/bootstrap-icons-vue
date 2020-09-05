<template>
  <h2>Individual icons</h2>
  <div class="icons-grid">
    <BIconAlarm />
    <BIconFileSpreadsheet />
    <BIconArrow90degDown />
  </div>
</template>

<script>
import { BIconAlarm, BIconFileSpreadsheet, BIconArrow90degDown } from 'bootstrap-icons-vue';

export default {
  name: 'IndividualIcons',
  components: {
    BIconAlarm,
    BIconFileSpreadsheet,
    BIconArrow90degDown,
  },
};
</script>
