
<template>
  <v-app-bar app>
    <div style="width: 100%" class="d-flex justify-end">
      <div class="d-flex flex-column align-center">
        <span class="caption">Dark mode</span>
        <v-switch hide-details dense @change="toggleDarkMode" :value="isDark" />
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { getParsedStorage, setStringifiedStorage } from '@/utils'

export default {
  data: () => ({
    isDark: false
  }),
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      setStringifiedStorage("isDark", this.$vuetify.theme.dark)
    },
  },
  mounted() {
    this.isDark = getParsedStorage("isDark")
  }
};
</script>

<style>
</style>
