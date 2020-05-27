<template>
  <div class="config-module">
    <b-tabs position="is-right" class="block">
      <!--      <b-tab-item label="General">-->

      <!--      </b-tab-item>-->
      <b-tab-item label="Classes">
        <div class="config-classes__header">
          <b-button type="is-info" icon-left="plus" pack="fas" @click="addClass"
            >add new class</b-button
          >
        </div>
        <config-class-card
          v-for="(cls, index) in storeState.classes"
          :key="`class-${index}`"
          :value="cls"
          class="config-classes__class"
        >
          {{ cls }}
        </config-class-card>
      </b-tab-item>
      <b-tab-item label="Store">
        <strong>STORE</strong>
        <p>to export the store just copy this content</p>
        <pre>{{ storeState }}</pre>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
// import { reactive } from "@vue/composition-api";
import storeState from "@/store";
import ConficClassCard from "@/components/config-class-card";

export default {
  name: "config-module",
  components: {
    "config-class-card": ConficClassCard
  },
  setup() {
    // const state = reactive({});

    // function add() {
    //   context.root.$router.push({ path: "/commands/new" });
    // }

    function addClass() {
      storeState.classes.push({
        id: new Date().getTime(),
        name: "",
        description: ""
      });
    }

    return {
      // state,
      storeState,
      addClass
    };
  }
};
</script>

<style scoped>
.config-classes__class {
  margin: 5px 0;
}
.config-classes__header {
  text-align: right;
  margin-bottom: 10px;
}
</style>
