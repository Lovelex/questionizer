<template>
  <v-card class="pa-4">
    <h1 class="mb-4">Editar pergunta</h1>
    <span v-if="!item">Não foi possível encontrar essa pergunta.</span>
    <v-form v-if="item">
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
      {{ item }}
      <div class="d-flex justify-end">
        <v-btn @click="submit" small color="warning">
          <span>Editar</span>
          <v-icon right>mdi-pencil</v-icon>
        </v-btn>
      </div>
    </v-form>
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

      this.$router.push({ name: 'home' })
    },
  },
  mounted() {
    this.loadItem();
  },
};
</script>

<style>
</style>
