<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4">
        <TaskList />
      </div>
      <div class="col">
        <!--   <ItemGroup v-if="0" type="currency" />

        <LocationsList v-if="0" />-->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskList from "@/components/TaskList";

//import ItemGroup from "@/components/ItemGroup";
//import LocationsList from "@/components/LocationsList";

export default {
  name: "Main",
  components: {
    TaskList
    //  ItemGroup,
    //  LocationsList
  }
};
</script>
