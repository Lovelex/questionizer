<template>
  <v-card class="pa-4">
    <h1 class="mb-4">Responder pergunta</h1>
    <p label="Título " outlined>Título</p>
    <v-radio-group v-model="selctedItem">
      <v-card @click="selctedItem = index" v-for="(item, index) in items" :key="index" class="pa-4 my-4">
        <div class="d-flex align-center">
          <v-radio :value="index"/>
          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis provident error sed quo nesciunt sit. Aliquam eos labore voluptatem modi aut, provident maxime natus nesciunt, soluta perferendis voluptates alias!</div>
        </div>
      </v-card>
    </v-radio-group>
    <div class="d-flex justify-end">
      <v-btn small color="primary">
        <span>Responder</span>
        <v-icon right>mdi-plus</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selctedItem: null,
    items: [
      {
        question: "Pergunta 1",
      },
      {
        question: "Pergunta 2",
      },
      {
        question: "Pergunta 3",
      },
      {
        question: "Pergunta 4",
      },
    ],
  }),
};
</script>

<style>
</style>
