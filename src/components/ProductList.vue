<template>
  <div class="min-h-screen flex flex-col">
    <div class="container mx-auto flex-grow px-4 py-8">
        <h1 class="text-3xl font-semibold mb-8 border-b-2 border-black">Products</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <a href="#" v-for="product in products" :key="product.id" class="bg-white shadow-lg rounded-lg w-80 h-auto"> 
          <img :src="product.image" alt="Product Image" class=" w-52 h-48 object-fill m-auto">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
            <p class="text-gray-600 mb-2">{{ limitDescription(product.description) }}</p>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-gray-800 font-semibold">Rs. {{ product.price }}</span>
                <span class="text-gray-600"> ({{ product.rating.rate }})</span>
              </div>
              <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" @click="addCart(method,product.id,quantity=1)">Add to Cart</button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  </template>

<script setup>
// import {defineStore} from 'pinia';
import getProducts from '../composables/getProducts.js';
import addCart from '../composables/cartItemHandle.js';
const method = 'POST';
const { products } = getProducts();

function limitDescription(description){
      const maxLength = 100; 
      if (description.length > maxLength) {
        return description.slice(0, maxLength) + '...';
      }
      return description;
    }

</script>