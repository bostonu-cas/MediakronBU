import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import users from './modules/users';
import items from './modules/items';
import sites from './modules/sites';
import comments from './modules/comments';

import config from '@/config';
import progressIncrementPlugin from './plugins/progress';

Vue.use(Vuex);

const state = {
  version: config.BUILD,
  errors: [],
  events: [],
  queries: {},
  progress: 0,
  loadTotal: 0,
  modal: {
    open: false,
    contents: ''
  }
};

const store = {
  state,
  getters,
  actions,
  mutations,
  plugins: [
      progressIncrementPlugin
  ],
  modules: {
    users,
    sites,
    items,
    comments
  }
};

export default new Vuex.Store(store);
