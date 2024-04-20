import { ref } from "vue";
import useFetch from "./useFetch";
import { useToast } from "vue-toastification";

export default function cartProducts(url, method, body) {
  const error = ref({});
  const cartData = ref([]);
  const toast=useToast()
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };
    if (localStorage.getItem("token")) {
        options.headers.Authorization = `Token ${localStorage.getItem("token")}`;
        }
  useFetch(url, options)
    .then((res) => {
      cartData.value = res.cart_items;
    })
    .catch((err) => {
      error.value = err;
    });

  function updateCartData(url, method, body) {
    let options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    };
    if (localStorage.getItem("token")) {
      options.headers.Authorization = `Token ${localStorage.getItem("token")}`;
    }
    useFetch(url, options)
      .then((res) => {
        cartData.value = res.cart_items;
      })
      .catch((err) => {
        error.value = err;
        toast.error(error.value.message);

      });
    return { cartData, error };
  }
  return { updateCartData, cartData, error };
}
