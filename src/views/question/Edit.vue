<template>
  <v-card class="pa-4">
    <h1 class="mb-4">Editar pergunta</h1>
    <span v-if="!item">Não foi possível encontrar essa pergunta.</span>
    <div v-if="item">
      <v-text-field v-model="item.title" label="Título" outlined />
      <v-text-field v-model="item.p1" label="Resposta 1" outlined />
      <v-text-field v-model="item.p2" label="Resposta 2" outlined />
      <v-text-field v-model="item.p3" label="Resposta 3" outlined />
      <v-text-field v-model="item.p4" label="Resposta 4" outlined />
      <div class="d-flex justify-end">
        <v-btn @click="submit" small color="warning">
          <span>Editar</span>
          <v-icon right>mdi-pencil</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
import { loadItems, saveItems } from '@/utils'

export default {
  data: () => ({
    item: null,
  }),
  methods: {
    loadItem() {
      const items = loadItems();
      const newItem = items.find((item) => item.id === this.$route.params.id);

      this.item = newItem;
    },
    submit() {
      const newItem = {
        ...this.item,
        updatedAt: Date.now()
      }

      const items = loadItems();

      const newItems = items.filter(item => item.id !== this.item.id)

      saveItems([...newItems, newItem])
    },
  },
  mounted() {
    this.loadItem();
  },
};
</script>

<style>
</style>
