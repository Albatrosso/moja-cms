import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Dash from '../views/DashBoardPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dash-board',
    name: 'Dash-board',
    component: Dash,
    // component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashBoardPage.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
