<template>
  <div class="">
    <div class="h5">{{ type }}</div>
    <div class="border border-rounded border-secondary p-3">
      <div
        class="border border-rounded border-secondary p-3"
        v-for="location in getAll"
        :key="location.id"
      >
        {{ location }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// @ is an alias to /src
//import LocationCard from "@/components/ItemCard";

export default {
  name: "ItemGroup",
  components: {
    //    ItemCard
  },
  props: {},
  computed: {
    ...mapGetters("locationsModule", ["getAll"])
  }
};
</script>
