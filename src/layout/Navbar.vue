<template>
  <v-app-bar app>
    <div style="width: 100%" class="d-flex justify-space-between">
      <v-btn exact :to="{name: 'home'}" fab small>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn :to="{ name: 'showQuestion', params: { id: 1 } }">Teste de resposta</v-btn>
      <v-btn :to="{ name: 'settings' }" fab small>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>
