<template>
  <v-card class="pa-4">
    <h1 class="mb-4">Responder pergunta</h1>
    <h3 v-if="!loadedItem" class="mb-4">Pergunta não encontrada</h3>
    <div v-if="loadedItem">
      <p label="Título " outlined>{{ loadedItem.title }}</p>
      <v-form @submit.prevent="onSubmit">
        <v-radio-group v-model="selectedItem">
          <v-card
            :style="{ borderColor: colors(answer) }"
            outlined
            @click="selectedItem = answer.id"
            v-for="(answer, index) in loadedItem.answers"
            :key="index"
            class="pa-4 my-4"
          >
            <div class="d-flex align-center">
              <v-radio class="mb-0" :value="answer.id" />
              <div class="">
                {{ answer.text }}
              </div>
            </div>
          </v-card>
        </v-radio-group>
        {{ submitedAnswer }}
        <div class="d-flex justify-end">
          <v-btn type="submit" small color="primary">
            <span>Responder</span>
            <v-icon right>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-form>
    </div>
  </v-card>
</template>

<script>
import { loadItems } from "@/utils";

export default {
  data: () => ({
    selectedItem: null,
    item: null,
    isSubmited: false,
    submitedAnswer: null,
  }),
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
    colors(answer) {
      if (this.isSubmited) {
        const darkOrLight = this.$vuetify.theme.dark ? "dark" : "light";

        if (answer.id === this.loadedItem.correctAnswer) {
          return this.$vuetify.theme.themes[darkOrLight].success;
        }

        if (this.submitedAnswer !== this.loadedItem.correctAnswer) {
          return this.$vuetify.theme.themes[darkOrLight].error;
        }
      }
    },
    onSubmit() {
      this.isSubmited = true;
      this.submitedAnswer = this.selectedItem;
    },
  },
};
</script>

<style>
</style>
