<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const router = useRouter();
const $q = useQuasar();

const props = defineProps({
  recordIds: { type: Array },
});
const email = ref("");
function sendRecords() {
  $q.notify({
    message: `Records sent to ${email.value}. Records included: ${props.recordIds}`,
    position: "top",
    color: "brand-1",
    classes: "text-body1 q-pa-lg",
    timeout: 10000,
    multiLine: true,
    actions: [{ label: "Dismiss", color: "white" }],
  });
  router.push(`/home`);
}
</script>

<template>
  <div class="row items-stretch q-gutter-x-md">
    <div class="col-12 text-h6 self-center q-mb-xs text-grey-9">Send to:</div>
    <div class="col">
      <q-input
        outlined
        v-model="email"
        label="Email"
        bg-color="white"
        class="text-body1"
        :rules="[
          (val, rules) =>
            rules.email(val) || 'Please enter a valid email address',
        ]"
        debounce="500"
      />
    </div>
    <div class="col-2" style="max-height: 55px">
      <q-btn
        label="SEND"
        color="green"
        class="full-width full-height rounded-borders"
        push
        :disable="!recordIds.length || !email"
        @click="sendRecords"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
