<template>
  <div class="h-screen flex flex-col">
    <div class="flex justify-center items-center bg-slate-100 text-6xl text-green-900 grow-0 shrink-0">TeXplore</div>
    <div class="flex justify-center items-center bg-slate-100 flex-grow">
      <div class="w-1/3  bg-white p-8 border rounded-md shadow-md">
        <h1 class="text-3xl font-bold mb-5">Login</h1>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <vinput :type="'email'" :id="'email'" :name="'email'" v-model="email" :error="error" />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <vinput :type="'password'" :id="'password'" :name="'password'" v-model="password" :error="error" />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white text-md font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Sign In
            </button>
            <a class="inline-block align-baseline font-bold text-md text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
          <div class="flex justify-center">
            <router-link :to="{ name: 'Signup' }">
              <button class="mt-14 border p-4 rounded-md bg-green-500 text-white text-sm font-bold"> New Here? Sign
                Up</button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import userLogin from '../composables/userLogin.js';
import vinput from '../components/FormInput.vue';
const { email, password, error,login } = userLogin();
</script>
