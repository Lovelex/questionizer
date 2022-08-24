<template>
  <v-card class="pa-4">
    <h1 class="mb-4">Nova pergunta</h1>
    <v-text-field v-model="item.title" label="Título " outlined />
    <v-text-field v-model="item.p1" label="resposta 1" outlined />
    <v-text-field v-model="item.p2" label="resposta 2" outlined />
    <v-text-field v-model="item.p3" label="resposta 3" outlined />
    <v-text-field v-model="item.p4" label="resposta 4" outlined />
    <div class="d-flex justify-end">
      <v-btn @click="submit" small color="primary">
        <span>Adicionar</span>
        <v-icon right>mdi-plus</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { generateId, saveItems } from "@/utils";

export default {
  data: () => ({
    item: {
      title: "",
      p1: "",
      p2: "",
      p3: "",
      p4: "",
    },
  }),
  methods: {
    submit() {
      const newItem = {
        ...this.item,
        fenquency: "low",
        id: generateId(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      const items = JSON.parse(localStorage.getItem("items"));
      const newItems = [ ...items, newItem ];

      saveItems(newItems)
    },
  },
};
</script>

<style>
</style>
