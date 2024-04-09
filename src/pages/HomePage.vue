<template>
    <Navbar />
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-4xl font-bold">Welcome to Texplore</h1>
        <p class="text-lg mt-4">Explore the world of Tech Gadjets</p>
    </div>
    <Footer />

</template>

<script setup>
import Navbar from '../components/AppNavbar.vue';
import Footer from '../components/AppFooter.vue';
</script>