import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Transactionforms from './views/Transactionforms.vue';
import ContactModificationRequest from './views/ContactModificationRequest.vue';
// import AccountDetails from './views/AccountDetails.vue';
import ScheduleAppointment from './views/ScheduleAppointment.vue';

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
      path: '/modifycontact',
      name: 'modifycontact',
      component: ContactModificationRequest,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleAppointment,
    },
    {
      path: '/manager',
      name: 'manager',
      component: () => import(/* webpackChunkName: "about" */ './views/Manager.vue'),
    },
    {
      path: '/Tier2Main',
      name: 'Tier2Main',
      component: () => import(/* webpackChunkName: "about" */ './views/Tier2Main.vue'),
    },

  ],
});
