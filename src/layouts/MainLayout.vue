<script setup>
import MainDrawer from "src/components/app/MainDrawer.vue";
import MainHeader from "src/components/app/MainHeader.vue";
import { ref } from "vue";

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
  <q-layout view="Lhh lpR lFf">
    <MainHeader />

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <MainDrawer />
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped></style>
