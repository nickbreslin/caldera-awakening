<template>
  <div class="bg-light border-bottom border-secondary">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="text-start">
          <span class="mb-0 h5">
            <img
              src="@/assets/logo.svg"
              height="60"
              class="align-text-middle"
            />
            Caldera</span
          >
          <span class="mb-0 ms-3 h5 text-warning">Awakening</span>
        </div>
        <div class="gold-wrapper mt-3 text-end">
          <!-- <ItemCard v-bind="getItem('gold')" :twoColumn="false" />-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import ItemCard from "@/components/ItemCard";

import { mapGetters } from "vuex";

export default {
  name: "TheHeader",
  components: {
    //  ItemCard
  },
  computed: {
    ...mapGetters("inventoryModule", ["getItem"])
  }
};
</script>

<style scoped>
.gold-wrapper {
  width: 200px;
}
</style>
