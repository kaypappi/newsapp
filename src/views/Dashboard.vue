<template>
  <div class="dashboard-wrapper mt-4">
    <div class="flex items-center">
      <h2 class="text-lg font-bold">Explore Channels</h2>
      <h4 class="text-indigo-400 text-sm ml-auto">
        See all <font-awesome-icon class="" icon="angle-right" />
      </h4>
    </div>

    <div class="flex justify-between mt-4 mb-16">
      <template v-if="gettingSources"
        ><source-cards-skeleton class="mr-4" /><source-cards-skeleton
          class="mr-4" /><source-cards-skeleton
          class="mr-4" /><source-cards-skeleton
      /></template>
      <source-cards
        v-else
        v-for="(item, index) in sources"
        :key="item.id"
        :title="item.name"
        :class="{ 'mr-4': index < sources.length - 1 }"
      />
    </div>
    <div class="flex items-center">
      <h2 class="text-lg font-bold">Todays Headlines</h2>
      <h4 class="text-indigo-400 text-sm ml-auto">
        See all <font-awesome-icon class="" icon="angle-right" />
      </h4>
    </div>
    <div class="headlines-grid mt-4 mb-16">
      <template v-if="gettingHeadlines"
        ><headlines-card-skeleton /><headlines-card-skeleton /><headlines-card-skeleton /><headlines-card-skeleton /><headlines-card-skeleton /><headlines-card-skeleton
      /></template>
      <headlines-card
        v-else
        v-for="item in headlines"
        :key="item.id"
        :item="item"
      />
    </div>
    <div class="flex items-center">
      <h2 class="text-lg font-bold">Featured News</h2>
      <h4 class="text-indigo-400 text-sm ml-auto">
        See all <font-awesome-icon class="" icon="angle-right" />
      </h4>
    </div>
    <div  class="headlines-grid mt-4 mb-16">
        <template v-if="gettingFeatured"
        ><featured-news-card-skeleton/><featured-news-card-skeleton/><featured-news-card-skeleton/></template>
      <featured-news-card
      v-else
        v-for="item in featured"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import SourceCards from "@/components/Cards/sourceCards";
import HeadlinesCard from "@/components/Cards/headlinesCard";
import FeaturedNewsCard from "@/components/Cards/featuredNewsCard.vue";
import SourceCardsSkeleton from "../components/Cards/sourceCardsSkeleton.vue";
import HeadlinesCardSkeleton from "../components/Cards/headlinesCardSkeleton.vue";
import FeaturedNewsCardSkeleton from '../components/Cards/featuredNewsCardSkeleton.vue';

export default {
  components: {
    SourceCards,
    HeadlinesCard,
    FeaturedNewsCard,
    SourceCardsSkeleton,
    HeadlinesCardSkeleton,
    FeaturedNewsCardSkeleton,
  },
  data() {
    return {
      gettingFeatured: false,
      gettingSources: false,
      gettingHeadlines: false,
    };
  },
  methods: {
    async getSources() {
      this.gettingSources = true;
      const response = await this.$store.dispatch("News/getSources");
      this.gettingSources = false;
    },
    async getHeadlines() {
      this.gettingHeadlines = true;
      const response = await this.$store.dispatch("News/getHeadlines", {
        country: "us",
      });
      this.gettingHeadlines = false;
    },
    async getFeatured() {
      this.gettingFeatured = true;
      const response = await this.$store.dispatch("News/getFeatured", {
        country: "us",
        category: "entertainment",
      });
      this.gettingFeatured = false;
    },
  },
  computed: {
    sources() {
      return this.$store.state.News.sources;
    },
    headlines() {
      return this.$store.state.News.headlines;
    },
    featured() {
        console.log(this.$store.state.News.featured)
      return this.$store.state.News.featured;
    },
  },
  mounted() {
    if (!this.sources) {
      this.getSources();
    }
    if (!this.headlines) {
      this.getHeadlines();
    }
    if (!this.featured) {
      this.getFeatured();
    }
  },
};
</script>

<style >
.headlines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap: 20px;
}
</style>