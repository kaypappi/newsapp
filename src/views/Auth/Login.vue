<template>
  <div
    class="
      login-wrapper
      w-screen
      h-screen
      bg-indigo-50
      flex
      items-center
      justify-center
      px-8
    "
  >
    <div class="w-96 px-4 py-12 bg-white rounded-md">
      <validation-observer v-slot="{ invalid }">
        <form @submit.prevent="login" class="login__form">
          <div class="text-center text-2xl font-semibold text-gray-600 mb-4">
            Log In
          </div>
          <TextInput
            :rules="'required'"
            v-model="form.userName"
            name="username"
            type="text"
            label="Username"
          />
          <TextInput
            :rules="'required'"
            v-model="form.password"
            name="password"
            type="password"
            label="Password"
          />
          <div class="form__item flex w-full items-center">
              <router-link to="/register" class="text-sm text-indigo-300" >Register</router-link>
            <a class="text-sm text-indigo-300 ml-auto" href>Forgot Password?</a>
          </div>
          <button
            :class="[`mt-4
              w-full
             bg-indigo-500
              text-indigo-100
              py-2
              rounded-md
              text-lg
              tracking-wide`,{'cursor-not-allowed':invalid}]"
            
            type="submit"
            :disabled="invalid"
          >
            Login
          </button>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/inputs/Input";
export default {
  components: {
    TextInput,
  },
  data() {
    return {
      form: {
        
      },
    };
  },
  methods:{
     async login(){
         const response= await this.$store.dispatch("login",this.form)
         this.$router.push({name:"home"})
      }
  }
};
</script>

<style>
</style>