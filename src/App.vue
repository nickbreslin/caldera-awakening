<template>
  <div class="container-fluid m-0 p-0">
    <TheHeader />
    <div class="container mt-3">
      <router-view />
      <TheFooter />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
