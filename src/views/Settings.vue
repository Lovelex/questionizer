<template>
  <v-card class="pa-4">
    <div>
      <span>Modo dark</span>
      <v-switch @change="toggleDarkMode" :value="isDark"></v-switch>
    </div>
    <div class="d-flex justify-end">
      <v-btn color="primary">
        <span>Salvar</span>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { getParsedStorage, setStringifiedStorage } from "@/utils";

export default {
  data: () => ({
    isDark: false,
  }),
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      setStringifiedStorage("isDark", this.$vuetify.theme.dark);
    },
  },
  mounted() {
    this.isDark = getParsedStorage("isDark");
  },
};
</script>

<style>
</style>
