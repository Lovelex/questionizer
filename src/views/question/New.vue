<template>
  <v-card class="pa-4">
    <h1 class="mb-4">Nova pergunta</h1>
    <v-form>
      <v-text-field v-model="item.title" label="Título " outlined />
      <v-radio-group v-model="item.correctAnswer">
        <div
          v-for="(answer, index) in item.answers"
          :key="index"
          class="d-flex align-center"
        >
          <v-radio :value="answer.id" />
          <v-text-field
            v-model="item.answers[index].text"
            :label="`Resposta ${index + 1}`"
            outlined
          />
        </div>
      </v-radio-group>
      <div class="d-flex justify-end">
        <v-btn @click="submit" small color="primary">
          <span>Adicionar</span>
          <v-icon right>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import { generateId, saveItems, loadItems } from "@/utils";

export default {
  data: () => ({
    item: {
      title: "",
      answers: [
        { text: "", id: generateId(8) },
        { text: "", id: generateId(8) },
        { text: "", id: generateId(8) },
        { text: "", id: generateId(8) },
      ],
      correctAnswer: null,
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

      const items = loadItems();

      saveItems([...items, newItem]);
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style>
</style>
