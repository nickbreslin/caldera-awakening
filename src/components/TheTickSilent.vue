<template>
  <div></div>
</template>

<script>
export default {
  name: "TheTickSilent",
  data: function () {
    return {
      tick: 1000,
      step: 100,
      interval: null,
      beginTs: new Date()
    };
  },
  methods: {
    doTick() {
      this.$store.dispatch("doTick", 1);

      //emit now.

      /* SetInterval would be better,
       but this works with the transition without having to recalculate each tick */
      setTimeout(() => this.doTick(), this.tick);
    }
  },

  mounted: function () {
    // Start the bar full. Delay a tick, otherwise constant refresh would 'doTick'
    this.progress = 100;
    setTimeout(() => this.doTick(), 10);
  }
};
</script>
