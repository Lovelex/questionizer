<template>
  <v-app>
    <Navbar />
    <v-main class="pa-4 mt-16">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/layout/Navbar";

export default {
  components: { Navbar },
  mounted() {
    if (!localStorage.getItem("items")) {
      localStorage.setItem("items", "[]");
    }
      this.$vuetify.theme.dark = JSON.parse(localStorage.getItem("isDark"));

  },
};
</script>

<style>
</style>
