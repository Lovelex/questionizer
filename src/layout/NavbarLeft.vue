<template>
  <v-navigation-drawer class="py-2" mini-variant permanent app>
    <div style="height: 100%" class="d-flex flex-column align-center">
      <v-btn depressed exact :to="{ name: 'home' }" fab small>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        depressed
        class="my-2"
        v-if="item"
        :to="{
          name: 'showQuestion',
          params: { id: item.id },
        }"
        fab
        small
      >
        <v-icon>mdi-bug</v-icon>
      </v-btn>
      <v-btn depressed fixed bottom :to="{ name: 'settings' }" fab small>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { getRandomItem } from "@/utils";

export default {
  computed: {
    item: getRandomItem,
  },
};
</script>

<style>
</style>
