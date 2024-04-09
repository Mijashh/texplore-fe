import { createRouter, createWebHistory } from 'vue-router';
import userLogin from '../pages/UserLogin.vue';
import userSignup from '../pages/UserSignUp.vue';
import Home from '../pages/HomePage.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: userLogin
},
  {
    path: '/signup',
    name: 'Signup',
    component: userSignup
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;