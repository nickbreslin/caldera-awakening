<template>
  <div></div>
</template>

<script>
export default {
  name: "TheTickSilent",
  data: function () {
    return {
      tick: 1000
    };
  },
  methods: {
    doTick() {
      this.$store.dispatch("doTick", 1);
      setTimeout(() => this.doTick(), this.tick);
    }
  },

  mounted: function () {
    setTimeout(() => this.doTick(), 10);
  }
};
</script>
