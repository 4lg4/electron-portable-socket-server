<template>
  <div class="initial-module">
    <p>
      <strong>to connect clients:</strong> Open <strong>http://localhost:3333/ping</strong> on your browser, then click refresh button
    </p>
    <hr>
    <div>
      <strong>CLIENTS</strong>
    </div>
    <div class="initial-module__action">
      <b-button
        type="is-info"
        class="commands-module__save"
        pack="fas"
        icon-left="sync-alt"
        @click="getClients"
        >refresh list</b-button
      >
    </div>
    <div class="initial-module__list">
      <pre>{{ state.clients }}</pre>
    </div>
  </div>
</template>

<script>
import http from "axios";
import { reactive } from "@vue/composition-api";

export default {
  data() {
    return {
      message: "",
      body: ""
    };
  },
  setup() {
    const state = reactive({
      clients: []
    });

    function getClients() {
      http
        .get("/api/clients")
        .then(({ data }) => (state.clients = data.clients));
    }

    return {
      state,
      getClients
    };
  }
};
</script>

<style scoped>
.initial-module__action {
  text-align: right;
  margin-bottom: 10px;
}
</style>
