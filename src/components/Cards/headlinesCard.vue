<template>
  <div class="w-full headlines-card ">
    <div class="bg-white "></div>
    <div class=" h-full ">
        <h3 class="text-lg font-bold">Test of a title</h3>
        <h4 class="text-base text-warmGray-400">Author</h4>
        <h5 class="text-sm text-warmGray-400">time</h5>
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
    grid-template-columns: 70px 1fr;
    grid-gap: 20px;
}
</style>