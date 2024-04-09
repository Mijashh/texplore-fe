import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import router from './router/routes.js'


const app = createApp(App)
app.use(router)
app.mount('#app')
