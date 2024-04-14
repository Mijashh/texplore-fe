<template>
  <div class="h-screen flex flex-col">
    <div class="flex justify-center items-center bg-slate-100 text-6xl text-green-900 grow-0 shrink-0">TeXplore</div>
    <div class="flex justify-center items-center bg-slate-100 flex-grow">
      <div class="w-1/3  bg-white p-8 border rounded-md shadow-md">
        <h1 class="text-3xl font-bold mb-5">Login</h1>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" v-model="email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required>
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" v-model="password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required>
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
import { ref } from 'vue';
import router from '../router/routes.js';
import axios from 'axios';
import { useToast } from 'vue-toastification'

const toast = useToast();
const email = ref('');
const password = ref('');
const loginerror = ref("");
const token = ref('');

const login = () => {
  const formData = {
    email: email.value,
    password: password.value
  };

  axios.post('http://127.0.0.1:8000/auth/login/', formData)
    .then(response => {
      token.value = response.data.token;
      localStorage.setItem('token', token.value);
      localStorage.setItem('email', email.value);
      router.push({ name: 'Home' });

    })
    .catch(error => {
      const responseData = error.response.data;
      loginerror.value = responseData.error || 'An unexpected error occurred.';
      if (loginerror.value === 'Invalid credentials') {
        toast.error('User does not exist!!');
      }
      else if (loginerror.value === 'Incorrect password'){
        toast.error('Password is incorrect!!');
      }
    });

};
</script>
