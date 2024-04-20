import { ref } from "vue";
import router from "../router/routes.js";
import { useToast } from "vue-toastification";
import useFetch from "../composables/useFetch.js";


export default function userLogin(){
  const toast = useToast();
  const email = ref("");
  const password = ref("");
  const error= ref({});
  const token = ref("");
  const url="http://127.0.0.1:8000/auth/login/"

  const login = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    };
    useFetch(url, options)
      .then((response) => {
        token.value = response.token;
        localStorage.setItem("token", token.value);
        localStorage.setItem("email", email.value);
        toast.success("Logged in successfully!!!");
        router.push({ name: "Home" });
      })
      .catch((err) => {
        error.value = err;
      });
  };
  return { email, password, login, error };
}

