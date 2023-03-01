<script setup>
const props = defineProps({
  observations: { type: Array },
});
</script>

<template>
  <div
    v-for="observation in observations"
    :key="observation.id"
    class="q-mb-lg shadow-5 rounded-borders q-pa-lg"
  >
    <div>
      {{ observation.id }}
    </div>
    <div
      v-for="code in observation.code.coding"
      :key="code.code"
      class="bg-grey-2 rounded-borders q-mb-md"
    >
      <div>
        {{ code.system }}
      </div>
      <div>
        {{ code.code }}
      </div>
      <div>
        {{ code.display }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
