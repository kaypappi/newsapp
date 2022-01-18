<template>
  <div class="dashboard">
    <Push
      :isOpen="!collasped"
      :crossIcon="!collasped && windows.width < 1100"
      :burgerIcon="false"
      @closeMenu="closeMenu"
      disableEsc
      :disableOutsideClick="!collasped"
      noOverlay
      ><sidebar :onclick="handleNavigation" />
    </Push>

    <div
      id="page-wrap"
      :class="['right bg-indigo-50 px-4', { collapsed: collasped }]"
    >
      <Header :collasped="collasped" :toggleCollapsed="openMenu" />
      <div class="taost-wrapper z-10 sticky top-12 w-5/6  md:w-full max-w-sm right-0 ml-auto ">
        <toast
          v-for="(toast, index) in toastsArray"
          :key="index"
          :toast="{...toast,index}"
        />
      </div>
      <div class="dashboard__main position-relative h-100">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { Push } from "vue-burger-menu";
import Sidebar from "@/components/Navigation/sidebar.vue";
import Header from "@/components/Navigation/header.vue";
import Toast from "../components/Toast.vue";
export default {
  components: {
    Push,
    Sidebar,
    Header,
    Toast,
  },
  data() {
    return {
      collasped: true,
      windows: {
        width: 0,
        height: 0,
      },
      deviceId: null,
    };
  },

  methods: {
    handleResize() {
      this.windows.width = window.innerWidth;
      this.windows.height = window.innerHeight;
      this.collasped = window.innerWidth < 1100 ? true : false;
    },
    toggleCollapsed() {
      this.collasped = !this.collasped;
    },
    closeMenu() {
      this.collasped = true;
    },
    openMenu() {
      this.collasped = false;
    },
    handleNavigation() {
      if (window.innerWidth < 1100) {
        this.collasped = true;
      }
    },
  },

  computed: {
    toastsArray() {
      return this.$store.state.ToastArray;
    },
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  /* created() {
        this.$store.dispatch("fetchUserDetails");
    }, */
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.right {
  width: calc(100vw - 300px);
  overflow-y: auto;
  position: fixed;
  top: 0;
  bottom: 0;
}

.right.collapsed {
  width: 100vw;
  padding: 0;
}
.dashboard >>> .bm-burger-button {
  position: fixed;
  width: 20px;
  height: 20px;
  left: 20px;
  top: 20px;
  cursor: pointer;
}
.dashboard >>> .bm-burger-bars {
  background-color: #373a47;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.dashboard >>> .bm-cross {
  background: #bdc3c7;
}
.dashboard >>> .bm-cross-button {
  height: 24px;
  width: 24px;
}
.dashboard >>> .bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  border-radius: 10px 10px 10px 10px;
  background-color: white; /* Black*/
  /*  border-right: 1.5px solid #e5eae9; */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 0; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.dashboard >>> .bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.dashboard >>> .bm-item-list {
  color: #697d69;
  margin-left: 0;
  font-size: 20px;
  position: relative;
  height: 100%;
  overflow-y: hidden;
}

.dashboard >>> .bm-item-list > * {
  display: flex;
  text-decoration: none;
}

.dashboard >>> .bm-item-list > * > span {
  margin-left: 0px;
  color: #697d69;
  font-size: 18px;
  font-weight: 400;
}
.dashboard >>> .bm-item-list > .active-menu > span {
  color: #27be58;
}
@media screen and (max-width: 1000px) {
  .right {
    width: 100vw;
  }
  .staffmain {
    overflow-x: hidden;
  }
}
</style>
