<template>
  <div id="tasklist">
    <div class="card border border-secondary mb-5 d-none">
      <div class="card-header border-bottom border-secondary bg-light h5">
        Quests
      </div>
      <div class="card-body m-0 py-0 px-2 pt-2 rounded-bottom">
        <div class="card mb-2">
          <div
            class="card-header collapsed bg-light"
            data-bs-toggle="collapse"
            data-bs-target="#task1"
            aria-expanded="false"
            role="button"
          >
            <div class="fw-bold">Task 1</div>
          </div>

          <div id="task1" class="collapse" ref="collapse">
            <div class="card-body">....</div>
          </div>
        </div>
      </div>
    </div>

    <div class="h5 border-bottom border-info text-info pb-1 mb-2">Quests</div>
    <div class="card mb-2">
      <div
        class="card-header bg-light"
        data-bs-toggle="collapse"
        data-bs-target="#task2"
        role="button"
      >
        <div class="fw-bold">Task 1</div>
      </div>

      <div id="task2" class="collapse show">
        <div class="card-body">....</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Collapse } from "bootstrap";

export default {
  name: "QuestAccordion",
  components: {},
  data: () => {
    return {
      color: "danger"
    };
  },
  props: {
    id: {
      type: String,
      default: "actionsList1"
    },
    label: {
      type: String,
      default: "actionsList2"
    },
    parentItem: {
      type: String,
      default: "actionsList3"
    }
  },
  computed: {
    actions() {
      return [
        {
          label: "Explore the [Newbie] Forest"
        }
      ];
    },
    actionListItem() {
      return `${this.id}-list`;
    }
  },
  methods: {},
  mounted() {
    const myCollapsible = document.getElementById("tasklist");
    myCollapsible.addEventListener("hide.bs.collapse", () => {
      console.log("Hide");
    });
    myCollapsible.addEventListener("show.bs.collapse", () => {
      console.log("Show");
    });

    new Collapse(this.$refs.collapse, {
      toggle: false
    });
  }
};
</script>

<style scoped>
.accordion-button {
  font-weight: bold;
}
.accordion-button:not(.collapsed) {
  background-color: #111;
  color: #2a9fd6;
}
</style>
