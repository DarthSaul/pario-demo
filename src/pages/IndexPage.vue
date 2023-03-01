<script setup>
import { ref } from "vue";
import { usePatientStore } from "src/stores/patients-store";
import PatientItem from "src/components/PatientItem.vue";
import PatientRecord from "src/components/PatientRecord.vue";

const patientStore = usePatientStore();

if (!patientStore.patients) {
  patientStore.indexPatients();
}

const patientSelected = ref(false);

function selectPatient(id) {
  patientSelected.value = id;
}
</script>

<template>
  <q-page padding>
    <div>
      <img
        alt="Pario logo"
        src="https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/929/300/resized/Pario_Logo_BlueBackground.png?1675881687"
        style="width: 75px; height: 75px"
      />
    </div>

    <div v-if="patientStore.loading">Loading...</div>
    <div v-else class="q-mb-xl">
      <div class="row items-stretch q-col-gutter-lg">
        <div
          v-for="patient in patientStore.patients"
          :key="patient.id"
          class="col-3 full-height"
        >
          <PatientItem v-bind="patient" @click="selectPatient(patient.id)" />
        </div>
      </div>
    </div>

    <hr />

    <div v-if="patientSelected">
      <PatientRecord :id="patientSelected" />
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
