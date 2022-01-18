<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img
      class="w-full h-full"
      :src="item.urlToImage"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{item.title}}</div>
      <p class="text-gray-700 text-base">
        {{item.content}}
      </p>
      <p class="text-sm text-gray-700 ">{{item.publishedAt}}</p>
    </div>
    
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