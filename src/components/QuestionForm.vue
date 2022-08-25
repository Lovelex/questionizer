<template>
  <v-form ref="form" @submit.prevent="emitSubmit">
    <v-text-field
      :rules="[required]"
      v-model="item.title"
      label="Título "
      outlined
    />
    <v-radio-group v-model="item.correctAnswer">
      <div
        v-for="(answer, index) in item.answers"
        :key="index"
        class="d-flex align-center"
      >
        <v-radio :value="answer.id" />
        <v-text-field
          :rules="[required]"
          v-model="item.answers[index].text"
          :label="`Resposta ${index + 1}`"
          outlined
        />
      </div>
    </v-radio-group>

    <div v-if="!item.correctAnswer">
      <v-icon small class="mr-2">mdi-alert-circle</v-icon>
      <span class="caption">Você deve marcar pelo menos uma resposta correta.</span>
    </div>

    <div class="d-flex justify-end">
      <v-btn v-if="!isUpdate" type="submit" small color="primary">
        <span>Adicionar</span>
        <v-icon right>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        @click="emitDelete"
        class="mr-2"
        v-if="isUpdate"
        small
        color="error"
      >
        <span>Deletar</span>
        <v-icon right>mdi-delete</v-icon>
      </v-btn>
      <v-btn v-if="isUpdate" type="submit" small color="warning">
        <span>Editar</span>
        <v-icon right>mdi-pencil</v-icon>
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import { generateId, required } from "@/utils";

export default {
  props: {
    isUpdate: {
      type: Boolean,
      default: false,
    },
    loadedItem: {
      type: Object,
      default: null,
    },
  },
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
    required,
    emitSubmit() {
      if (this.$refs.form.validate() && this.item.correctAnswer) {
        this.$emit("onSubmit", this.item);
      }
    },
    emitDelete() {
      this.$emit("onDelete", this.item.id);
    },
  },
  mounted() {
    if (this.loadedItem) {
      this.item = this.loadedItem;
    }
  },
};
</script>

<style>
</style>
