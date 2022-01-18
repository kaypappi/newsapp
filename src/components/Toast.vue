<template>
  <div :class="['alert-toast  w-full', { checked: checked }]">
    <input type="checkbox" class="hidden" v-model="checked" id="toastalert" />

    <div
      :class="[
        'flex items-center justify-between w-full p-2  rounded-md shadow',
        variantClass,
      ]"
    >
      {{ toast.message }}

      <label
        @click="closeToast"
        class="close cursor-pointer"
        title="close"
        for="toastalert"
      >
        <font-awesome-icon class="" icon="times" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toast: Object,
  },
  data() {
    return {
      checked: false,
    };
  },
  methods:{
      closeToast(){
          this.checked=false
          this.$store.dispatch("removeToast",this.toast.index)
      }
  },
  mounted(){
      setTimeout(()=>{
          this.closeToast()
      },5000)
  },
  computed: {
    variantClass() {
      switch (this.toast.variant) {
        case "success":
          return "bg-green-100 border border-green-400 text-green-700";
        case "error":
          return "bg-red-100 border border-red-400 text-red-700";
      }
    },
  },
};
</script>

<style scoped>
.alert-toast {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/*Toast close animation*/
.alert-toast.checked {
  -webkit-animation: fade-out-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: fade-out-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes fade-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }
}

@keyframes fade-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }
}
</style>