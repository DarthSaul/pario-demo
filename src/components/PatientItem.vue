<script setup>
import { computed } from "vue";
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: Array,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
});
const lastName = computed(() => {
  return props.name[0].family;
});
const firstName = computed(() => {
  return props.name[0].given[0];
});
</script>

<template>
  <div class="q-pa-lg shadow-5 rounded-borders person-record cursor-pointer">
    <div class="text-center">Person Img Placeholder</div>
    <div class="row">
      <div class="col-12">{{ lastName }}, {{ firstName }}</div>
      <div class="col-12">DOB: {{ props.birthDate }}</div>
      <div class="col-12">Patient ID: {{ props.id }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.person-record {
  max-width: 300px;
}
</style>
