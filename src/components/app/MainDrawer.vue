<script setup>
import EssentialLink from "src/components/app/EssentialLink.vue";
const essentialLinks = [
  {
    title: "Home",
    icon: "home",
    path: "/home",
  },
  {
    title: "History",
    icon: "history",
    path: "/history",
  },
  {
    title: "Settings",
    icon: "settings_suggest",
    path: "/settings",
  },
];
const subLinks = [
  {
    title: "Profile",
    icon: "account_circle",
    path: "/profile",
  },
  {
    title: "Support",
    icon: "support",
    path: "/support",
  },
];
</script>

<template>
  <div class="row items-center q-px-md q-mb-lg q-pt-lg">
    <div class="col-auto q-mr-sm">
      <img
        alt="Pario logo"
        src="https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/929/300/resized/Pario_Logo_BlueBackground.png?1675881687"
        style="width: 35px; height: 35px"
      />
    </div>
    <div class="col-auto text-h4 q-mb-xs">Pario</div>
  </div>

  <q-list>
    <q-item-label header> Main Menu </q-item-label>
    <EssentialLink
      v-for="link in essentialLinks"
      :key="link.title"
      v-bind="link"
    />
    <q-separator inset class="q-my-lg" />
    <q-item-label header> Help </q-item-label>
    <EssentialLink v-for="link in subLinks" :key="link.title" v-bind="link" />
  </q-list>
</template>

<style lang="scss" scoped></style>
