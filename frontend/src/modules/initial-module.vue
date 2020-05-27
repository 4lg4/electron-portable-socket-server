<template>
  <div>
    <p>
      you can access <strong>http://localhost:3333/ping</strong> on your browser
    </p>
    <h1>Ping ???</h1>
    <div>
      <p>{{ message }}</p>
    </div>
    <div>


<!--      <textarea v-model="body" class="a-textarea"></textarea> <br />-->
      <button @click="send">Send</button>
    </div>
  </div>
</template>

<script>
import http from "axios";

import { encode } from "@msgpack/msgpack";

export default {
  data() {
    return {
      message: "",
      body: ""
    };
  },
  created() {
    http.get("/api/ping").then(({ data }) => (this.message = data.message));
  },
  methods: {
    send() {
      console.log(this);
      const a = JSON.parse(this.body);
      console.log(a);
      // console.log('decode', decode(a));
      console.log('encode', encode(a));
    },
  }
};
</script>

<style scoped>
.a-textarea {
  width: 80%;
  height: 150px;
}
</style>
