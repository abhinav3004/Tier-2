import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Transactionforms from './views/Transactionforms.vue'
// import AccountDetails from './views/AccountDetails.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/transactionforms',
      name: 'Transactionforms',
      component: Transactionforms,
    },
    {
      path: '/accountsCustomers',
      name: 'accountsCustomers',
      component: () => import(/* webpackChunkName: "about" */ './views/AccountCustomers.vue'),
    },
    {
      path: '/accountdetails',
      name: 'accountdetails',
      component: () => import(/* webpackChunkName: "about" */ './views/AccountDetails.vue'),
    },
    {
      path: '/manageraccountdetails',
      name: 'manageraccountdetails',
      component: () => import(/* webpackChunkName: "about" */ './views/ManagerDetails.vue'),
    },
    {
      path: '/manager',
      name: 'manager',
      component: () => import(/* webpackChunkName: "about" */ './views/Manager.vue'),
    },

  ],
});
