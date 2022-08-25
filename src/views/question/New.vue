<template>
  <v-card class="pa-4">
    <h1 class="mb-4">Nova pergunta</h1>
    <QuestionForm @onSubmit="submit" />
  </v-card>
</template>

<script>
import { saveItems, loadItems, required, generateId } from "@/utils";
import QuestionForm from "@/components/QuestionForm.vue";

export default {
  components: { QuestionForm },

  methods: {
    required,
    submit(item) {
      const newItem = {
        ...item,
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
