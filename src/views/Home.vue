<template>
  <div>
    <div style="max-width: 400px">
      <v-text-field
        label="Buscar pergunta..."
        v-model="search"
        dense
        outlined
        rounded
        append-icon="mdi-magnify"
      />
    </div>

    <v-card class="pa-4">
      <div class="d-flex justify-end mb-4">
        <v-btn :to="{ name: 'newQuestion' }" small color="primary">
          <span>Nova</span>
          <v-icon right>mdi-plus</v-icon>
        </v-btn>
      </div>

      <EmptyQuestionImage v-if="!items.length"/>
      <v-card
        :to="{ name: 'editQuestion', params: { id: item.id } }"
        v-for="item in newItems"
        :key="item.id"
        class="pa-2 mb-4"
      >
        <div class="d-flex">
          <div class="mr-4 caption">
            <v-icon class="mr-1" x-small> mdi-clock </v-icon>
            <span>{{ milisToDate(item.createdAt) }}</span>
          </div>
          <div class="caption">
            <v-icon class="mr-1" x-small> mdi-pencil </v-icon>
            <span>{{ milisToDate(item.updatedAt) }}</span>
          </div>
        </div>
        <div>
          <p>{{ item.title }}</p>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import { milisToDate, loadItems } from "@/utils";
import EmptyQuestionImage from '@/components/home/EmptyQuestionImage.vue';

export default {
  components: { EmptyQuestionImage },
  data: () => ({
    search: "",
    items: [],
  }),
  computed: {
    newItems() {
      return this.items.filter((item) => {
        return item.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    milisToDate,
    loadItems() {
      this.items = loadItems().sort((a, b) => {
        if (a.updatedAt < b.updatedAt) {
          return 1;
        }
        if (a.updatedAt > b.updatedAt) {
          return -1;
        }
        return 0;
      });
    },
  },
  mounted() {
    this.loadItems();
  },
};
</script>
