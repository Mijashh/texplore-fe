<template>
    <nav class="py-6 border-b border-grey-500 border-5 w-full flex items-center bg-purple-500 text-white">
        <a href="/"> <img src="../assets/texplore.svg" alt="logo" class="w-32 h-25 ml-16" > </a>
        <div class="ml-auto space-x-16">
            <a href="/" class="px-3 py-4 text-2xl">Home</a>
            <a href="#" class="px-3 py-4 text-2xl">Cart</a>
            <a href="#" class="px-3 py-4 text-2xl">Contact</a>
            <a href="#" class="px-3  py-4 text-2xl">About</a>
            <a href="#" class="px-3 py-4 pr-20 text-2xl" @click="handleLogout" v-if="token">Log Out</a>
            <a href="/login" class="px-3 pr-20 py-4 text-2xl" v-else>Log In</a>
        </div>
    </nav>
</template>

<script setup>
import router from '../router/routes.js';
import axios from 'axios';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
const toast = useToast();

const responseData = ref('');
const token = ref(localStorage.getItem('token'));
const handleLogout = async () => {
  try {
    await axios.post('http://127.0.0.1:8000/auth/logout/', null, {
      headers: {
        Authorization: `Token ${token.value}`, 
      },
    }).then((response) => {
      responseData.value = response.data;
      toast.success(responseData.value.message);
    })
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    token.value='';
    router.push({ name: 'Home' });
  } catch (error) {
    console.log(error);
  }
};
</script>