<template>
  <div>
    <!-- <div class="">...</div>-->
    <!-- Equipment -->
    <ItemGroup type="currency" />

    <LocationsList />
  </div>
</template>

<script>
// @ is an alias to /src
import ItemGroup from "@/components/ItemGroup";
import LocationsList from "@/components/LocationsList";

export default {
  name: "Main",
  components: {
    ItemGroup,
    LocationsList
  }
};
</script>
