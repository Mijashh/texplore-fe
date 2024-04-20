import { ref } from 'vue';
import useFetch from './useFetch';
import { useToast } from 'vue-toastification';

export default function cartHandle(method,id,quantity) {
    const toast=useToast()
    const error= ref({});
    const response= ref({});
    const url = 'http://127.0.0.1:8000/cart-items/'
        let options = {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                product: id,
                quantity: quantity
              }),
        };
        if (localStorage.getItem('token')) {
            options.headers.Authorization = `Token ${localStorage.getItem('token')}`;
        }
        useFetch(url, options).then((res) => {
            response.value = res
            toast.success('Item added to Cart!!!')
        }).catch((err) => {
            error.value=err
        });    
    return {response,error,}
}