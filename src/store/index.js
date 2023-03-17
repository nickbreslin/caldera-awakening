import { createStore } from "vuex";

import inventoryModule from "@/store/inventoryModule";
import locationsModule from "@/store/locationsModule";

export default createStore({
  state: {},
  mutations: {},
  actions: {
    doTick({ commit }) {
      //console.log("ACTION > doTick");

      commit(
        "inventoryModule/ADD_ITEM",
        { id: "gold", amount: 1 },
        { root: true }
      );
    }
  },
  getters: {},
  modules: {
    inventoryModule,
    locationsModule
  }
});
