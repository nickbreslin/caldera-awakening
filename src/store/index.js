import { createStore } from "vuex";

import inventoryModule from "@/store/inventoryModule";
import locationsModule from "@/store/locationsModule";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    inventoryModule,
    locationsModule
  }
});
