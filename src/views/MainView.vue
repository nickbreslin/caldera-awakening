<template>
  <div>
    <!-- <div class="">...</div>-->
    <!-- Equipment -->
    <ItemGroup type="currency" />
  </div>
</template>

<script>
// @ is an alias to /src
import ItemGroup from "@/components/ItemGroup";

export default {
  name: "Main",
  components: {
    ItemGroup
  }
};
</script>
