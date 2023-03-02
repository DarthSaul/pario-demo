<script setup>
const props = defineProps({
  data: { type: Object },
  selected: { type: Boolean },
});
function toFixed(val) {
  return val.toFixed(2);
}
const emit = defineEmits(["add-record"]);
function selectRecord() {
  emit("add-record", props.data.id);
}
</script>

<template>
  <div
    class="bg-white q-pa-lg shadow-1 border-radius10 cursor-pointer"
    :class="{ 'selected-border shadow-10': selected }"
    @click="selectRecord"
  >
    <div class="row q-gutter-x-md">
      <div class="col-2">
        <div class="text-caption text-grey-7">Record ID</div>
        <div class="text-body1 text-bold">
          {{ props.data.id }}
        </div>
      </div>
      <div class="col-2">
        <div class="text-caption text-grey-7">Code</div>
        <div class="text-body1 text-bold">
          {{ props.data.code.text }}
        </div>
      </div>
      <div class="col-3">
        <div class="text-caption text-grey-7">Value</div>
        <div class="text-body1 text-bold">
          {{ toFixed(props.data.valueQuantity.value) }}
          <span class="text-caption">{{ props.data.valueQuantity.unit }}</span>
        </div>
      </div>
      <div class="col-2">
        <div class="text-caption text-grey-7">Recorded</div>
        <div class="text-body1 text-bold">
          {{ props.data.effectiveDateTime || "N/A" }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selected-border {
  border: 3px solid #326f85;
}
</style>
