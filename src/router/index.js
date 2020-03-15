import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import DashBoard from '../views/DashBoardPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dash-board',
    name: 'Dash-board',
    component: DashBoard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
