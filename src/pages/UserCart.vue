<template>
    <div class="min-h-screen flex flex-col">
        <Navbar />
        <h1 class="text-3xl font-semibold text-center my-8">Shopping Cart</h1>
        <div class="container mx-auto flex-grow px-4 py-8">
            <div v-if="!cartData || cartData.length == 0" class="text-center text-gray-600">
                <div class="m-auto">
                    <h1 class="text-2xl">Your cart is empty</h1>
                    <router-link to="/" class="text-blue-500 text-3xl hover:text-blue-700">Continue
                        Shopping</router-link>
                </div>
            </div>
            <div v-else>
                <div v-for="item in cartData" :key="item.id" class="border rounded-md overflow-hidden mb-2">
                    <div class="grid grid-cols-3 justify-normal p-4">
                        <div class="flex flex-auto">
                            <img :src="item.image" alt="Product Image" class="w-16 h-auto mr-4">
                            <h2 class="text-lg font-semibold m-auto justify-self-start">{{ item.product_title }}</h2>
                        </div>
                        <div class="flex items-center m-auto">
                            <p class="font-bold text-lg mr-4">Quantity:</p>
                            <button @click="handleQuantity(item, mode = 'decrease')"
                                class="px-2 py-1 bg-gray-200 rounded-l">-</button>
                            <p class="text-gray-600 px-2">{{ item.quantity }}</p>
                            <button @click="handleQuantity(item, mode = 'increase')"
                                class="px-2 py-1 bg-gray-200 rounded-r">+</button>
                            <div class="ml-9">
                                <button @click="handleQuantity(item, mode = 'clear')">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="rgb(255,69,0)"
                                            d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="text-xl font-semibold px-4 py-6 justify-self-end">Rate:{{ item.price }}</div>
                    </div>
                </div>
                <div class="mt-8 text-right">
                    <div class="text-xl font-semibold">Total: Rs {{ total }}</div>
                    <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4">Proceed to
                        Checkout</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import cartHandle from '../composables/cartHandle.js';
import Navbar from '../components/AppNavbar.vue';
import Footer from '../components/AppFooter.vue';
import { computed } from 'vue';

let url = 'http://127.0.0.1:8000/cart/';
let method = 'GET';
let body = null;

const handleQuantity = (item, mode) => {
    url = 'http://127.0.0.1:8000/cart-items/' + item.id + '/';
    method = 'PUT';
    if (mode == 'increase') {
        body = JSON.stringify({
            product: item.product_id,
            quantity: ++item.quantity

        });
    }
    else if (mode == 'decrease') {
        body = JSON.stringify({
            product: item.product_id,
            quantity: --item.quantity
        });
    }
    else if (mode == 'clear') {
        method = 'DELETE';
        body = null;
    }
    updateCartData(url, method, body);
}
const { updateCartData, cartData } = cartHandle(url, method, body);
const total = computed(() => {
    let totalAmount = 0;
    if (cartData.value && cartData.value.length) {
        cartData.value.forEach(item => {
            totalAmount += item.price * item.quantity;
            totalAmount = parseFloat(totalAmount.toFixed(2))
        })
    }
    return totalAmount;
})
</script>