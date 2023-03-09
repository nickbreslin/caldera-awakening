<template>
  <div>
    <div class="" ref="card">
      <div
        class="d-flex"
        :class="{
          'justify-content-between': twoColumn,
          'justify-content-end': !twoColumn
        }"
      >
        <div
          :class="`text-${rarity}`"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="test"
          :data-bs-title="`<div class='text-start'><span class=' fw-bold text-${rarity}'>${label}</span><br/>${description}.<br/><i>You have: ${amount}</i></div>`"
          data-bs-custom-class="custom-tooltip"
          data-bs-html="true"
        >
          [{{ label }}]
        </div>
        <div
          :class="{
            'ms-3': !twoColumn
          }"
        >
          {{ amount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tooltip } from "bootstrap";

export default {
  name: "ItemCard",
  components: {},
  props: {
    label: String,
    description: String,
    amount: Number,
    rarity: String,
    twoColumn: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  mounted() {
    const tooltipTriggerList = this.$refs.card.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );

    console.log("done");
  }
};
</script>

<style>
.custom-tooltip * {
  text-align: left;
}
</style>
