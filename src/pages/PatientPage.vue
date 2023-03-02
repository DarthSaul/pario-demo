<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePatientStore } from "src/stores/patients-store";
import PatientObservation from "src/components/PatientObservation.vue";
import SendRecords from "src/components/SendRecords.vue";
import LoadingItem from "src/components/app/LoadingItem.vue";

const route = useRoute();
const patientStore = usePatientStore();

const patient = ref({
  loading: true,
  data: null,
});
const observations = ref({
  loading: true,
  data: null,
});
onMounted(async () => {
  // Get patient data
  const record = await patientStore.getPatientById(route.params.id);
  if (record) {
    setTimeout(() => {
      patient.value.data = record;
      patient.value.loading = false;
    }, 1000);
  } else {
    patient.value.loading = false;
  }

  // Get observations
  const res = await patientStore.getObservationsById(route.params.id);
  if (res) {
    setTimeout(() => {
      observations.value.data = res;
      observations.value.loading = false;
    }, 1000);
  } else {
    observations.value.loading = false;
  }
});

const selectedRecords = ref([]);
function addRecord(id) {
  if (selectedRecords.value.includes(id)) {
    selectedRecords.value = selectedRecords.value.filter((val) => val !== id);
  } else {
    selectedRecords.value.push(id);
  }
}
function selected(id) {
  return selectedRecords.value.includes(id);
}
</script>

<template>
  <q-page class="q-pa-lg">
    <div v-if="patient.loading" class="row q-col-gutter-md q-mb-xl">
      <div class="col-xs-12 col-sm">
        <div class="bg-white shadow-1 q-pa-md border-radius10">
          <LoadingItem />
        </div>
      </div>
      <div class="col-xs-12 col-sm">
        <div class="bg-white shadow-1 q-pa-md border-radius10">
          <LoadingItem />
        </div>
      </div>
      <div class="col-xs-12 col-sm">
        <div class="bg-white shadow-1 q-pa-md border-radius10">
          <LoadingItem />
        </div>
      </div>
    </div>
    <div v-else class="row q-col-gutter-md q-mb-xl">
      <div class="col-xs-12 col-sm">
        <div class="bg-white shadow-1 q-pa-md border-radius10">
          <div class="row items-center">
            <div class="col-auto q-mr-md">
              <q-avatar
                size="50px"
                font-size="32px"
                color="brand-1"
                text-color="white"
                icon="face"
              />
            </div>
            <div class="col">
              <div class="text-caption text-grey-7">Name</div>
              <div class="text-h5 ellipsis">
                {{ patient.data.name[0].family }},
                {{ patient.data.name[0].given[0] }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm">
        <div class="bg-white shadow-1 q-pa-md border-radius10">
          <div class="row items-center">
            <div class="col-auto q-mr-md">
              <q-avatar
                size="50px"
                font-size="32px"
                color="brand-1"
                text-color="white"
                icon="event"
              />
            </div>
            <div class="col">
              <div class="text-caption text-grey-7">DOB</div>
              <div class="text-h5 ellipsis">
                {{ patient.data.birthDate }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm">
        <div class="bg-white shadow-1 q-pa-md border-radius10">
          <div class="row items-center">
            <div class="col-auto q-mr-md">
              <q-avatar
                size="50px"
                font-size="32px"
                color="brand-1"
                text-color="white"
                icon="medication"
              />
            </div>
            <div class="col">
              <div class="text-caption text-grey-7">GP</div>
              <div class="text-h5 ellipsis">
                {{ patient.data.generalPractitioner[0].display }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Observations -->
    <div
      v-if="observations.loading"
      class="bg-white q-pa-lg shadow-1 border-radius10"
    >
      <LoadingItem />
    </div>
    <div v-else class="q-mb-xl">
      <div v-for="obsv in observations.data" :key="obsv.id" class="q-mb-lg">
        <PatientObservation
          :data="obsv"
          :selected="selected(obsv.id)"
          @add-record="addRecord"
        />
      </div>
    </div>

    <!-- Send -->
    <SendRecords v-if="!observations.loading" :recordIds="selectedRecords" />
  </q-page>
</template>

<style lang="scss" scoped></style>
