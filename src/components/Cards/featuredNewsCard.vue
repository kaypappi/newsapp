<template>
  <div>
    <img class="w-full h-64 bg-white rounded-sm mb-4" :src="item.urlToImage" alt="featured-img"/>
    <h3 class="text-lg font-bold line-clamp-2">{{item.title}}</h3>
    <h4 class="text-base text-warmGray-400">{{item.author}}</h4>
    <h5 class="text-sm text-warmGray-400">{{item.publishedAt}}</h5>
  </div>
</template>

<script>
export default {
    props:{
    item:Object
}
};
</script>

<style>
</style>