<template>
  <div class="dashboard-wrapper mt-4">
    <div class="flex items-center">
      <h2 class="text-lg font-bold">Explore Channels</h2>
      <h4 class="text-indigo-400 text-sm ml-auto">
        See all <font-awesome-icon class="" icon="angle-right" />
      </h4>
    </div>
    <div class="flex mt-4 mb-16">
      <source-cards />
      <source-cards class="ml-4" />
      <source-cards class="ml-4" />
    </div>
    <div class="flex items-center">
      <h2 class="text-lg font-bold">Todays Headlines</h2>
      <h4 class="text-indigo-400 text-sm ml-auto">
        See all <font-awesome-icon class="" icon="angle-right" />
      </h4>
    </div>
    <div class="headlines-grid mt-4 mb-16">
      <headlines-card />
      <headlines-card />
      <headlines-card />
      <headlines-card />
      <headlines-card />
      <headlines-card />
    </div>
    <div class="flex items-center">
      <h2 class="text-lg font-bold">Featured News</h2>
      <h4 class="text-indigo-400 text-sm ml-auto">
        See all <font-awesome-icon class="" icon="angle-right" />
      </h4>
    </div>
    <div class="headlines-grid mt-4 mb-16">
      <featured-news-card />
      <featured-news-card />
      <featured-news-card />
    </div>
  </div>
</template>

<script>
import SourceCards from "@/components/Cards/sourceCards";
import HeadlinesCard from "@/components/Cards/headlinesCard";
import FeaturedNewsCard from "@/components/Cards/featuredNewsCard.vue";

export default {
  components: {
    SourceCards,
    HeadlinesCard,
    FeaturedNewsCard,
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