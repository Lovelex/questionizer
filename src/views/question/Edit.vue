<template>
  <v-card class="pa-4">
    <h1 class="mb-4">Editar pergunta</h1>
    <span v-if="!loadedItem">Não foi possível encontrar essa pergunta.</span>
    <QuestionForm
      v-if="loadedItem"
      :loadedItem="loadedItem"
      isUpdate
      @onSubmit="submit"
      @onDelete="deleteItem"
    />
  </v-card>
</template>

<script>
import { loadItems, saveItems } from "@/utils";
import QuestionForm from "@/components/QuestionForm.vue";

export default {
  components: { QuestionForm },
  computed: {
    loadedItem() {
      const items = loadItems();
      const searchedItem = items.find(
        (item) => item.id === this.$route.params.id
      );

      return searchedItem;
    },
  },
  methods: {
    deleteItem(id) {
      if (confirm("Quer realmente deletar essa pergunta?")) {
        const items = loadItems();

        const newItems = items.filter((item) => item.id !== id);

        saveItems([...newItems]);

        this.$router.push({ name: "home" });
      }
    },
    submit(item) {
      const newItem = {
        ...item,
        updatedAt: Date.now(),
      };

      const items = loadItems();

      const newItems = items.filter((item) => item.id !== newItem.id);

      saveItems([...newItems, newItem]);

      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style>
</style>
