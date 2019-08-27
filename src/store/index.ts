import Vue from 'vue';
import Vuex from 'vuex';
import ShopMoudle from './modules/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shop: ShopMoudle,
  },
});

