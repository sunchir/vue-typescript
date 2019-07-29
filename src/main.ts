import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
// 响应式rem
import '@/utile/remDeal.ts';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
