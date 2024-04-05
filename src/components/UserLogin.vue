<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-1/3">
      <h1 class="text-3xl font-bold mb-5">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
          <p class="text-red-500 text-sm italic border-red-500 " v-if="email && !password">Please choose a password.</p>
          <p class="text-red-500 text-md italic border-red-500 " v-if="invalidLogin">{{ loginerror }}</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const password = ref('');
const invalidLogin = ref(false);
const loginerror = ref("");
const token = ref('');

const login = () => {
  const formData = {
    email: email.value,
    password: password.value
  };

  axios.post('http://127.0.0.1:8000/api/auth/', formData)
    .then(response => {
      token.value = response.data.token;
      invalidLogin.value = false;
      
    })
    .catch(error => {
      const responseData = error.response.data;
      loginerror.value = responseData.error || 'An unexpected error occurred.';
      invalidLogin.value = true;
    });
};
</script>
