<template>
  <div>
    <div class="h5 text-secondary">The Guardian Chamber</div>
    <div class="border border-secondary rounded p-3">
      Lorum ipsum description.
    </div>
  </div>
</template>

<script>
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
  computed: {}
};
</script>
