<template>
    <div class="flex justify-center items-center h-screen bg-slate-100">
        <div class="w-1/3 bg-white p-8 border rounded-md shadow-md">
            <h1 class="text-3xl font-bold mb-5">Sign Up</h1>
            <form @submit.prevent="signup">
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                    <vinput :type="'text'" :id="'name'" :name="'name'" v-model="name" :error="error" />
                </div>
                <div class="mb-6">
                    <label for="contact_no" class="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
                    <vinput :type="'tel'" :id="'contact_no'" :name="'contact_no'" v-model="contact_no" :error="error" />
                </div>
                <div class="mb-6">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <vinput :type="'email'" :id="'email'" :name="'email'" :required=true v-model="email" :error="error" />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <vinput :type="'password'" :id="'password'" :name="'password'" v-model="password" :error="error" />
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
            <signupsucess v-if="successful"
                class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50" @close="redirectoLogin" />
        </div>
    </div>

</template>


<script setup>
import router from "../router/routes.js";
import signupsucess from '../components/SignupSuccess.vue';
import userSignup from '../composables/userSignup.js';
import vinput from '../components/FormInput.vue';
const {email, password,name,contact_no,signup, successful,error } = userSignup();
const redirectoLogin = () => {
    router.push({ name: 'Login' });
}
</script>