<template>
  <div>
    <h1>Ping</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import http from "axios";

export default {
  data() {
    return {
      message: ""
    };
  },
  created() {
    http.get("/api/ping").then(({ data }) => (this.message = data.message));
  }
};
</script>

<style scoped></style>
