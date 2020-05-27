<template>
  <div>
    <b-button
      type="is-info"
      icon-right="plus"
      class="commands-module__save"
      pack="fas"
      @click="add"
    />

    <h1>
      Commands
    </h1>
    <div>
      <command-card
        v-for="(command, index) in storeState.commands"
        :key="index"
        :value="command"
      ></command-card>
    </div>
  </div>
</template>

<script>
// import http from "axios";
// http.get("/api/ping").then(({ data }) => (this.message = data.message));
import storeState from "@/store";
import { reactive } from "@vue/composition-api";
import CommandCard from "@/components/command-card.vue";

export default {
  components: {
    "command-card": CommandCard
  },
  setup(props, context) {
    const state = reactive({});

    function add() {
      context.root.$router.push({ path: "/commands/new" });
    }

    return {
      state,
      storeState,
      add
    };
  }
};
</script>

<style scoped>
.commands-module__save {
  position: absolute;
  right: 15px;
  top: 15px;
}
</style>
