<template>
  <div class="header-wrapper py-4 bg-indigo-50 flex items-center">
    <div v-if="collasped" @click="toggleCollapsed" class="dashboard__nav__left">
      <div class="dashboard__nav__item">
        <font-awesome-icon class=" text-indigo-500 mr-4" size="2x" icon="bars" />
      </div>
    </div>
    <div class="header-right flex w-full md:w-1/3 ml-auto">
      <search class="flex-auto w-50"></search>
      <div
        class="
          w-12
          rounded-md
          flex
          justify-center
          items-center
          ml-4
          h-auto
          bg-indigo-500
          text-white
        "
      >
        <font-awesome-icon class="" icon="sort-amount-up-alt" />
      </div>
      <font-awesome-icon
        size="3x"
        class="w-12 ml-4 h-auto text-indigo-500"
        icon="user-circle"
      />
    </div>
  </div>
</template>

<script>
import Search from "@/components/inputs/search";
export default {
  props: {
    collasped: Boolean,
    toggleCollapsed: {
      type: Function,
      default: () => {},
    },
  },
  components: {
    Search,
  },
};
</script>

<style>
</style>