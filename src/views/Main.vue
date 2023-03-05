<template>
  <div>
    <div class="card">
      <div class="card-body"><i>stir stir stir</i>We've awakened.</div>
      <div class="card-footer text-end">
        <button class="btn btn-link fw-bold">Next</button>
      </div>
    </div>

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
