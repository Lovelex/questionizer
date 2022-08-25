<template>
  <div width="100%" class="d-flex justify-center">
    <v-sheet class="text-center" :max-width="size">
      <v-img :max-width="size" src="@/assets/svg/new.svg" />
      <div class="mt-8">
        <h3>Você não possui perguntas</h3>
        <p>Crie uma nova clicando no botão "NOVA"</p>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: [String, Number],
      default: "356",
    },
  },
};
</script>
