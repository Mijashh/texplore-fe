<template>
  <div class="flex justify-center items-center h-screen">
    <div class="max-w-md w-full bg-white shadow-md rounded-md p-6">
      <h2 class="text-xl font-bold mb-4">Signup Successful</h2>
      <p class="text-gray-700 mb-4">Congratulations! Your signup was successful.</p>
      <p class="text-gray-700 mb-6">You can now login to your account.</p>
      <button @click="$emit('close')"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
defineEmits(['close']);
</script>