import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Create from '../views/CreatePage.vue';
import NewsOverview from '../views/NewsOverviewPage.vue';

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
    component: Create,
    // component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashBoardPage.vue'),
  },
  {
    path: '/news-overview',
    name: 'NewsOverview',
    component: NewsOverview,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
