import { ref } from 'vue';
import useFetch from './useFetch';

export default function getProducts() {
    const error = ref({});
    const token = localStorage.getItem("token");
    const url = 'http://127.0.0.1:8000/products/';
    const products = ref();

    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: null
    };

    if (token) {
        options.headers.Authorization = `Token ${token}`;
    }

    useFetch(url, options).then((res) => {
        products.value = res;
    }).catch((err) => {
        error.value = err;
    });    

    return { products, error };
}