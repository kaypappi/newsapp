<template>
  <div class="w-full headlines-card ">
    
    <img class="h-full rounded-md" :src="item.urlToImage" alt="headline-img">
    <div class=" h-full ">
        <h3 class="text-lg font-bold line-clamp-1">{{item.title}}</h3>
        <h4 class="text-base text-warmGray-400">{{item.author}}</h4>
        <h5 class="text-sm text-warmGray-400">{{item.publishedAt}}</h5>
    </div>
  </div>
</template>

<script>
export default {
props:{
    item:Object
}
}
</script>

<style scoped>
.headlines-card{
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-gap: 20px;
}
</style>