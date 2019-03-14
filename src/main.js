import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
//import AccountDetails from './views/AccountDetails.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);
Vue.config.productionTip = false;

vm1=new Vue({
  data: {
    title:'bharti'
   },
  router,
  store,
  render: h => h(App),
}).$mount('#app');

