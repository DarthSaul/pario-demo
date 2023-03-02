import { defineStore } from "pinia";
import axios from "axios";

export const usePatientStore = defineStore("patients", {
  state: () => ({
    loading: false,
    patients: null,
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
          setTimeout(() => {
            this.patients = res.data;
            this.loading = false;
          }, 1000);
        }
        // Else throw error + notify user
      } catch (err) {
        console.log(err);
        // Notify ?
        this.loading = false;
      }
    },

    async getPatientById(id) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios(
            `https://dev.pario.life/fhir-r4/Patient/${id}`
          );
          if (res.data) {
            resolve(res.data);
          }
        } catch (err) {
          console.log(err);
          reject(err);
        }
      });
    },

    async getObservationsById(id) {
      // this.loading = true;
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios(
            `https://dev.pario.life/fhir-r4/Observation?patientID=${id}`
          );
          if (res.data) {
            resolve(res.data);
          }
        } catch (err) {
          console.log(err);
          reject(err);
        }
      });
    },
  },
});
