<template>
    <div class="flex justify-center items-center h-screen bg-slate-100">
        <div class="w-1/3 bg-white p-8 border rounded-md shadow-md">
            <h1 class="text-3xl font-bold mb-5">Sign Up</h1>
            <form @submit.prevent="signup">
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" v-model="email"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input type="password" id="password" name="password" v-model="password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                    <p class="text-red-500 text-md italic border-red-500 " v-if="signuperror">{{ signuperror }}</p>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign Up
                    </button>
                    <a class="inline-block align-baseline font-bold text-md text-blue-500 hover:text-blue-800"
                        href="/login">
                        Already have an account? Sign in
                    </a>
                </div>
            </form>
            <signupsucess v-if="successful" class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50" />
        </div>
    </div>
    
</template>






<script setup>
import { ref } from 'vue';
import signupsucess from '../components/SignupSuccess.vue';
import axios from 'axios';
const signuperror = ref('');
const email = ref('');
const password = ref(''); 
const successful = ref(false);


const signup = async () => {
    try {
        const formData = {
            email: email.value,
            password: password.value
        };
        await axios.post('http://127.0.0.1:8000/users/', formData);
        successful.value = true;
        // router.push({ name: 'Login' });
    } catch (error) {
        const responseData = error.response.data;
        signuperror.value = responseData.error || 'An unexpected error occurred.';
        successful.value = false;

    }
};


</script>