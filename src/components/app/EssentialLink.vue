<template>
  <q-item
    clickable
    :to="path"
    class="q-mx-md q-px-md q-mb-sm border-radius10"
    exact-active-class="active-link"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      {{ title }}
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    path: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
.active-link {
  color: #326f85;
  font-weight: bold;
  background-color: rgba(50, 111, 133, 0.1);
}
</style>
