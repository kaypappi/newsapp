<template>
  <div class="w-full headlines-card animate-pulse ">
    
    <div class="h-full bg-coolGray-300 rounded-md" ></div>
    <div class=" h-full ">
        <h3 class="text-lg bg-coolGray-300 h-4 mb-4 w-full font-bold line-clamp-1"></h3>
        <h4 class="text-base bg-coolGray-300 h-4 mb-4 w-3/4 text-warmGray-400"></h4>
        <h5 class="text-sm bg-coolGray-300 h-4 w-1/2"></h5>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.headlines-card{
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-gap: 20px;
}
</style>