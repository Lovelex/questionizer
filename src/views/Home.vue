<template>
  <div>
    <div style="max-width: 400px">
      <v-text-field
        label="Buscar pergunta..."
        dense
        outlined
        rounded
        append-icon="mdi-magnify"
      />
    </div>

    <div class="mb-4">
      <span class="d-block">Ordenar por:</span>
      <v-chip class="mr-2">Acertos</v-chip>
      <v-chip>Erros</v-chip>
    </div>

    <v-card class="pa-4">
      <div class="d-flex justify-end mb-4">
        <v-btn :to="{ name: 'newQuestion' }" small color="primary">
          <span>Nova</span>
          <v-icon right>mdi-plus</v-icon>
        </v-btn>
      </div>
      <v-card :to="{ name: 'editQuestion', params: { id: item.id } }" v-for="item in items" :key="item.id" class="pa-4 mb-4">
        <v-chip class="mb-2">{{ item.fenquency }}</v-chip>

        <p>{{ item.title }}</p>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
  }),
  methods: {
    loadItems() {
      this.items = JSON.parse(localStorage.getItem("items"))
    }
  },
  mounted() {
    this.loadItems()
  }
};
</script>
