import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//import 'bootstrap-vue/dist/css/bootstrap.min.css';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods: {
    alertMsg: function (event) {
      alert('Do you want to delete this Account?');
    }
  },
  render: h => h(App),
}).$mount('#app');
