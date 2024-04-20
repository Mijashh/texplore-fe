<template>
    <div>
        <input :type="type" :id="id" :name="name" v-model="modalVal"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required :class="{ 'border-red-500': errorMessage }">
        <div v-if="errorMessage" class="inline-block text-red-500 italic text-sm pt-2 animate-shake">{{ errorMessage }}
        </div>
    </div>
</template>


<script setup>
import { defineModel, watch } from 'vue';
import { defineProps } from 'vue';
import { ref } from 'vue';
const errorMessage = ref('')
const props = defineProps({
    type: { type: String, required: true },
    id: { type: String, required: true },
    name: { type: String, required: false },
    error: { type: Object, required: false },
});
const modalVal = defineModel();
watch(() => props.error, (newVal) => {
    if (props.name in newVal) {
        errorMessage.value = newVal[props.name][0]
    }
    else {
        errorMessage.value = ''
    }
})
watch(() => modalVal.value, () => {
    if (errorMessage.value !== '') {
        errorMessage.value = ''
    }
})
</script>