<template>
  <nav class="py-6 border-b border-grey-500 border-5 w-full flex items-center bg-gray-700 text-white">
    <a href="/"> <img src="../assets/texplore.svg" alt="logo" class="w-32 h-25 ml-16"> </a>
    <div class="ml-auto space-x-16">
      <a href="/" class="px-3 py-4 text-2xl">Home</a>
      <a href="/cart" class="px-3 py-4 text-2xl">Cart</a>
      <a href="#contact" class="px-3 py-4 text-2xl" @click.prevent="handleScroll('contact')">Contact</a>
      <a href="#about" class="px-3  py-4 text-2xl" @click.prevent="handleScroll('about')">About</a>
      <a href="#" class="px-3 py-4 pr-20 text-2xl" @click="handleLogout" v-if="token">Log Out</a>
      <a href="/login" class="px-3 pr-20 py-4 text-2xl" v-else>Log In</a>
    </div>
  </nav>
</template>

<script setup>
import userLogout from '../composables/userLogout.js';
const { token, handleLogout } = userLogout();
function handleScroll(scrollTo) {
  const contactSection = document.getElementById(scrollTo);
  contactSection.scrollIntoView({ behavior: 'smooth' });
}
</script>