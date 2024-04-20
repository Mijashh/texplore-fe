import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './router/routes.js';

const app = createApp(App);
app.use(router);

app.use(Toast, {
  position: 'top-right',
  timeout: 1500,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
});
app.mount('#app');