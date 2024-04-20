import router from '../router/routes.js';
import useFetch from './useFetch.js';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const userLogout = () => {
    const toast = useToast();

    const responseData = ref('');
    const url = 'http://127.0.0.1:8000/auth/logout/';
    const token = ref(localStorage.getItem('token'));
    const handleLogout =() => {
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Token ${token.value}`,
            },
            body: null
          };
        useFetch(url, options)
        .then((response) => {
        responseData.value = response;
        toast.success(responseData.value.message);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        token.value = '';
        router.push({ name: 'Home' });
        })
        .catch((error) => {
        const errorMessage = error.message;
        responseData.value = errorMessage || 'An unexpected error occurred.';
        toast.error(responseData.value);
        });
    };
    return { token,handleLogout };
}
export default userLogout;
    