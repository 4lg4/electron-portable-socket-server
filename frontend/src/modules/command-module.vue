<template>
  <div class="command-module">
    <b-button
      type="is-info"
      icon-right="save"
      class="command-module__save"
      pack="fas"
      @click="save"
    />

    <section>
      <b-field label="Simple">
        <b-select placeholder="Select a name" v-model="state.class">
          <option
            v-for="(cls, index) in storeState.classes"
            :value="cls.id"
            :key="`class-${index}`"
          >
            {{ cls.name }}
          </option>
        </b-select>
      </b-field>

      <b-field label="Title">
        <b-input v-model="state.title"></b-input>
      </b-field>
      <pre>{{ state }}</pre>

      <div class="command-module__editor">
        <h3><strong>Command</strong></h3>
        <b-tabs position="is-right" class="block">
          <b-tab-item label="Editor">
            <json-editor
              :options="{
                confirmText: 'confirm',
                cancelText: 'cancel'
              }"
              :objData="state.json"
              v-model="state.json"
            >
            </json-editor>
          </b-tab-item>

          <b-tab-item label="Raw Editor">
            <b-input
              class="command-module__editor__raw"
              type="textarea"
              v-model="state.rawJson"
            />
          </b-tab-item>

          <b-tab-item label="Preview">
            <pre>{{ state.json }}</pre>
          </b-tab-item>

          <b-tab-item label="MsgPack">
            <strong>HEX</strong>
            <pre>{{ state.jsonMsgPack.hex }}</pre>

            <br />
            <strong>RAW</strong>
            <pre>{{ state.jsonMsgPack.raw }}</pre>
          </b-tab-item>
        </b-tabs>
      </div>
    </section>
  </div>
</template>

<script>
// import http from "axios";
// http.get("/api/ping").then(({ data }) => (this.message = data.message));
import storeState, { save as saveStore } from "@/store";
import { reactive, computed } from "@vue/composition-api";
import { encode } from "@msgpack/msgpack";
import JsonEdit from "vue-json-edit";
import Vue from "vue";
Vue.use(JsonEdit);

export default {
  name: "command-module",
  setup() {
    const state = reactive({
      id: null,
      title: "",
      json: {},
      class: storeState.classes[0].id,
      rawJson: computed({
        get() {
          return JSON.stringify(state.json, null, 2);
        },
        set(json) {
          try {
            state.json = JSON.parse(json);
          } catch (e) {
            console.error("JSON not valid");
          }
        }
      }),

      jsonMsgPack: computed(() => {
        const enc = encode(state.json, { forceFloat32: true });
        const hex = new Buffer(enc, "utf8").toString("hex");

        return {
          raw: `${enc}`,
          hex
        };
      })
    });

    function save() {
      const toSave = {
        title: state.title,
        class: state.class,
        command: state.json
      };

      if (!state.id) {
        toSave.id = new Date().getTime();
        storeState.commands.push(toSave);
        saveStore();

        return;
      }

      saveStore();
    }

    return {
      state,
      storeState,
      save
    };
  }
};
</script>

<style scoped>
.command-module {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.command-module__editor {
  flex: auto;
}

.command-module__save {
  position: absolute;
  right: 15px;
  top: 15px;
}

.command-module__editor__raw {
  width: 100%;
  height: 100%;
}
</style>

<style>
.command-module__editor__raw textarea {
  resize: none;
  width: 100%;
  height: 100%;
}
</style>
