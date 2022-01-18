<template>
  <div class="explore-wrapper">
    explore
    <vue-masonry-wall :items="items" :options="options" @append="getEverything">
      <template v-slot:default="{ item }">
        <full-news-card :item="item" />
      </template>
    </vue-masonry-wall>
  </div>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";
import FullNewsCard from "../components/Cards/fullNewsCard.vue";
export default {
  components: {
    VueMasonryWall,
    FullNewsCard,
  },
  data() {
    return {
      items: [],
      options: {
        padding: { default: 12, 1: 6, 2: 8 },
      },
      initial: 0,
      total: 0,
      loading: false,
    };
  },
  methods: {
    async getEverything() {
      if (this.loading) {
        return;
      }
      this.initial++;
      this.loading = true;
      const response = await this.$store.dispatch("News/getEverything", {
        sortBy: "popularity",
        q: "f",
        page: this.initial,
      });
      this.total = response.data.totalResults;
      this.items = [...this.items, ...response.data.articles];
      this.loading = false;
    },
  },
  mounted() {},
};
</script>

<style>
</style>