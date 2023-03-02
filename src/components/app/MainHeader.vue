<script setup>
const emit = defineEmits(["toggle-drawer"]);
function handleClick() {
  emit("toggle-drawer");
}
</script>

<template>
  <q-header class="bg-transparent q-px-sm q-py-md" style="height: 90px">
    <q-item>
      <q-item-section avatar>
        <q-avatar size="55px" @click="handleClick" class="cursor-pointer">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-black text-h5 text-weight-bold">
          Hello, Saul!
        </q-item-label>
        <q-item-label class="text-body2 text-grey-8" lines="1">
          Welcome back to Pario.
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn
          icon="add"
          label="CALL TO ACTION"
          color="brand-1"
          class="border-radius10 full-height"
        />
      </q-item-section>
    </q-item>
  </q-header>
</template>

<style lang="scss" scoped></style>
