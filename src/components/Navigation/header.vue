<template>
  <div class="header-wrapper py-4 bg-indigo-50">
      <div class="header-left"></div>
      <div class="header-right flex w-full md:w-1/3  ml-auto">
          <search class="flex-auto w-64"></search>
          <div class="w-12 rounded-md flex justify-center items-center ml-4 h-auto bg-indigo-500 text-white">
              <font-awesome-icon class="" icon="sort-amount-up-alt" />
          </div>
          <font-awesome-icon size="3x" class="w-12 ml-4 h-auto text-indigo-500" icon="user-circle" />
      </div>
  </div>
</template>

<script>
import Search from "@/components/inputs/search"
export default {
components:{
    Search,
}
}
</script>

<style>

</style>