<template>
  <div class="">
    <div class="h5">{{ type }}</div>
    <div class="border rounded border-secondary p-3">
      <div v-for="item in items" :key="item.id"><ItemCard v-bind="item" /></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// @ is an alias to /src
import ItemCard from "@/components/ItemCard";

export default {
  name: "ItemGroup",
  components: {
    ItemCard
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters("inventoryModule", ["getByType"]),
    items() {
      return this.getByType(this.type);
    }
  }
};
</script>
