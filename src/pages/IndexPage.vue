<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { usePatientStore } from "src/stores/patients-store";
import PatientItem from "src/components/PatientItem.vue";
import LoadingItem from "src/components/app/LoadingItem.vue";

const patientStore = usePatientStore();
const router = useRouter();

if (!patientStore.patients) {
  patientStore.indexPatients();
}

function selectPatient(id) {
  router.push(`/home/${id}`);
}
</script>

<template>
  <q-page class="q-pa-lg">
    <div v-if="patientStore.loading">
      <div class="row items-stretch q-col-gutter-lg">
        <div v-for="n in 3" :key="n" class="col-12">
          <div class="q-pa-lg bg-white shadow-5 border-radius10">
            <LoadingItem />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="q-mb-xl">
      <div class="row q-col-gutter-lg">
        <div
          v-for="patient in patientStore.patients"
          :key="patient.id"
          class="col-12"
        >
          <PatientItem v-bind="patient" @click="selectPatient(patient.id)" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
