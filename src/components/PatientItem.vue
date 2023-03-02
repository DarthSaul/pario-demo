<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
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
function handleClick(msg) {
  $q.notify({
    message: `Ok, proceeding with ${msg}!`,
    position: "top",
    color: "brand-1",
  });
}
</script>

<template>
  <div class="q-pa-lg bg-white shadow-5 border-radius10 cursor-pointer">
    <div class="row items-center q-gutter-x-lg">
      <div class="col-auto">
        <q-avatar
          size="70px"
          font-size="42px"
          color="brand-1"
          text-color="white"
          icon="face"
        />
      </div>
      <div class="col-3">
        <div class="text-caption text-grey-7">Name</div>
        <div class="text-h5 text-bold">{{ lastName }}, {{ firstName }}</div>
      </div>
      <div class="col-2">
        <div class="text-caption text-grey-7">Patient ID</div>
        <div class="text-h5 text-bold">{{ props.id }}</div>
      </div>
      <div class="col">
        <div class="text-caption text-grey-7">DOB</div>
        <div class="text-h5 text-bold">{{ props.birthDate }}</div>
      </div>
      <q-separator vertical inset />
      <div class="col-auto">
        <div class="q-mb-xs">
          <q-btn
            icon="monitor_heart"
            label="ACTION 1"
            color="brand-1"
            class="rounded-borders"
            size="sm"
            @click.stop.prevent="handleClick('Action 1')"
          />
        </div>
        <div>
          <q-btn
            icon="spa"
            label="ACTION 2"
            color="brand-1"
            class="rounded-borders"
            size="sm"
            @click.stop.prevent="handleClick('Action 2')"
          />
        </div>
      </div>
    </div>

    <div class="row"></div>
  </div>
</template>

<style lang="scss" scoped></style>
