<template>
  <div class="sidebar-wrapper w-full bg-white mt-4  px-4">
    <div class="dashboard__sidebar__list w-full">
      <div class="dashboard__sidebar__list__top w-full">
        <template v-for="(menu, index) in menus">
          <router-link
            class="dashboard__sidebar__list__item flex hover:bg-indigo-100 hover:text-indigo-400  rounded-lg px-4 text-base text-warmGray-400 w-full py-4 "
            :to="{name:menu.to}"
            :key="menu.name + index"
            @click.native="onclick"
            :exact="menu.to === '/'"
          >
            <div class="dashboard__sidebar__list__item__icon  ">
              <font-awesome-icon class="" :icon="menu.icon" />
            </div>
            <div class="dashboard__sidebar__list__item__text  ml-3">
              {{ menu.name }}
            </div>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: "Home", icon: "home", to: "home" },
        { name: "Explore", icon: "home", to: "head" },
        { name: "Saved", icon: "home", to: "head" },
      ],
    };
  },
};
</script>

<style scoped>
.router-link-active{
    color: #3730a3;
    background-color: #c7d2fe;
}
</style>