import { defineStore } from "pinia";
import axios from "axios";

export const usePatientStore = defineStore("patients", {
  state: () => ({
    loading: false,
    patients: null,
    currentPatient: null,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async indexPatients() {
      // this.counter++;
      this.loading = true;
      try {
        const res = await axios("https://dev.pario.life/fhir-r4/Patient");
        if (res.data) {
          this.patients = res.data;
        }
        // Else throw error + notify user
        this.loading = false;
      } catch (err) {
        console.log(err);
        // Notify ?
        this.loading = false;
      }
    },

    async getObservationById(id) {
      // this.loading = true;
      try {
        const res = await axios(
          `https://dev.pario.life/fhir-r4/Observation?patientID=${id}`
        );
        if (res.data) {
          this.currentPatient = res.data;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});
