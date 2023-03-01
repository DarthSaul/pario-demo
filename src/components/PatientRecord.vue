<script setup>
import { onMounted, ref } from "vue";
import { usePatientStore } from "src/stores/patients-store";
import PatientObservation from "./PatientObservation.vue";

const patientStore = usePatientStore();

const props = defineProps({
  id: { type: String, required: true },
});

const observation = ref(null);
onMounted(() => {
  patientStore.getObservationById(props.id);
});
</script>

<template>
  <div class="text-h3">Medical History</div>
  <div v-if="patientStore.currentPatient">
    <PatientObservation :observations="patientStore.currentPatient" />
  </div>
</template>

<style lang="scss" scoped></style>
