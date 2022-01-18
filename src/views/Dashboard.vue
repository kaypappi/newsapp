<template>
  <div class="dashboard-wrapper mt-4">
    <div class="flex items-center">
      <h2 class="text-lg font-bold">Explore Channels</h2>
      <h4 class="text-indigo-400 text-sm ml-auto">
        See all <font-awesome-icon class="" icon="angle-right" />
      </h4>
    </div>
    <div v-if="sources" class="flex justify-between mt-4 mb-16">
      <source-cards v-for="(item,index) in sources" :key="item.id" :title="item.name" :class="{'mr-4':index<sources.length-1}" />
      
    </div>
    <div class="flex items-center">
      <h2 class="text-lg font-bold">Todays Headlines</h2>
      <h4 class="text-indigo-400 text-sm ml-auto">
        See all <font-awesome-icon class="" icon="angle-right" />
      </h4>
    </div>
    <div v-if="headlines" class="headlines-grid mt-4 mb-16">
      <headlines-card v-for="(item) in headlines" :key="item.id" :item="item" />
      
    </div>
    <div class="flex items-center">
      <h2 class="text-lg font-bold">Featured News</h2>
      <h4 class="text-indigo-400 text-sm ml-auto">
        See all <font-awesome-icon class="" icon="angle-right" />
      </h4>
    </div>
    <div v-if="featured" class="headlines-grid mt-4 mb-16">
      <featured-news-card v-for="(item) in featured" :key="item.id" :item="item" />
      
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
  methods:{
    async  getSources(){
        this.gettingSources=true
        const response= await this.$store.dispatch("News/getSources")
        this.gettingSources=false
        
    },
    async  getHeadlines(){
        this.gettingHeadlines=true
        const response= await this.$store.dispatch("News/getHeadlines",{country:"us"})
        this.gettingHeadlines=false
        console.log(response)
    },
    async  getFeatured(){
        this.gettingFeatured=true
        const response= await this.$store.dispatch("News/getHeadlines",{country:"us",category:"entertainment"})
        this.gettingFeatured=false
        console.log(response)
    }
  },
  computed:{
      sources(){
          if(!this.$store.state.News.sources) {
              return null
          }
          return this.$store.state.News.sources.slice(0,4)
      },
      headlines(){
          if(!this.$store.state.News.headlines) {
              return null
          }
          return this.$store.state.News.headlines.slice(0,6)
      },
      featured(){
          if(!this.$store.state.News.headlines) {
              return null
          }
          return this.$store.state.News.headlines.slice(0,3)
      }
  },
  mounted(){
      if(!this.sources){
          this.getSources()
      }
      if(!this.headlines){
          this.getHeadlines()
      }
      if(!this.featured){
          this.getFeatured()
      }
  }
};
</script>

<style >
.headlines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap: 20px;
}
</style>