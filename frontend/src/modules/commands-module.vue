<template>
  <div class="commands-module">
    <b-button
      type="is-info"
      icon-right="plus"
      class="commands-module__save"
      pack="fas"
      @click="add"
    />

    <div class="commands-module__search">
      <b-field>
        <b-input
          v-model="state.filter"
          @input="filter"
          type="search"
          icon-pack="fas"
          icon="search"
          icon-right="times"
          icon-right-clickable
          @icon-right-click="filterClear"
        ></b-input>
      </b-field>
    </div>

    <div class="commands-module__commands">
      <template v-if="state.commands.length === 0">
        <strong>no matches</strong>
      </template>

      <template v-if="state.commands.length > 0">
        <command-card
          v-for="(command, index) in state.commands"
          :key="index"
          :value="command"
          @edit="edit"
        ></command-card>
      </template>
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
    const state = reactive({
      filter: "",
      commands: storeState.commands
    });

    function add() {
      storeState.command = {
        id: null,
        class: storeState.classes[0].id,
        title: "",
        command: {}
      };

      context.root.$router.push({ name: "command-module" });
    }

    function edit(command) {
      storeState.command = command;
      context.root.$router.push({ name: "command-module" });
    }

    const indexedClasses = storeState.classes.reduce((reduced, item) => {
      reduced[
        item.id
      ] = `${item.name.toLowerCase()} ${item.description.toLowerCase()}`;

      return reduced;
    }, {});

    function filter() {
      if (!state.filter) {
        state.commands = storeState.commands;
        return;
      }

      state.commands = storeState.commands.filter(
        item =>
          !!`${indexedClasses[item.class]} ${item.title.toLowerCase()}`.match(
            state.filter
          )
      );
    }

    function filterClear() {
      state.filter = "";
      filter();
    }

    return {
      state,
      storeState,
      add,
      edit,
      filter,
      filterClear
    };
  }
};
</script>

<style scoped>
.commands-module {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.commands-module__commands {
  flex: auto;
}

.commands-module__search {
  margin: 15px 0;
}

.commands-module__save {
  position: absolute;
  right: 15px;
  top: 15px;
}
</style>
