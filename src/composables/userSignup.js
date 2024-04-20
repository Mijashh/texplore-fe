import { ref } from 'vue';
import useFetch from './useFetch';
import { useToast } from 'vue-toastification'

export default function userSignup() {
    const toast = useToast();
    const email = ref('');
    const password = ref('');
    const name = ref('');
    const contact_no = ref('');
    const successful = ref(false);
    const error= ref({});
    const url = 'http://127.0.0.1:8000/users/'

    const signup = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
                name: name.value,
                contact_no: contact_no.value
            }),
        };
        useFetch(url, options).then(() => {
            successful.value = true;
            toast.success("User created successfully!!!");
        }).catch((err) => {
            error.value=err
        });
        
    };
    return {email, password,name,contact_no,signup, successful,error };
}