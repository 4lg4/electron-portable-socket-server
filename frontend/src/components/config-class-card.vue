<template>
  <div class="config-class-card card">
    <template v-if="state.isEdit">
      <div class="config-class-card__edit card-content">
        <section>
          <b-field label="Title">
            <b-input v-model="value.name"></b-input>
          </b-field>
        </section>
        <section>
          <b-field label="Description">
            <b-input type="textarea" v-model="value.description" />
          </b-field>
        </section>
      </div>

      <b-button type="is-info" icon-right="save" pack="fas" @click="save" class="config-class-card__action-button" />
    </template>

    <template v-if="!state.isEdit">
      <div class="config-class-card__view card-content">
        <strong>{{ value.name }}</strong>
        <p>{{ value.description }}</p>
      </div>

      <b-button type="is-info" icon-right="edit" pack="fas" @click="edit" class="config-class-card__action-button" />
    </template>
  </div>
</template>

<script>
import { reactive, computed } from "@vue/composition-api";
import { save as saveStore } from "@/store";

export default {
  name: "config-class-card",
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const state = reactive({
      isEdit: false,
      value: computed(() => props.value)
    });

    function save() {
      console.log("save");
      /* eslint-disable */
      // let cls = storeState.classes.find(({ id }) => id === state.value.id);
      // cls = { ...cls, ...state.value };
      /* eslint-enable */
      saveStore();
      state.isEdit = false;
    }

    function edit() {
      console.log("edit");
      state.isEdit = true;
    }

    return {
      state,
      save,
      edit
    };
  }
};
</script>

<style scoped>
.config-class-card {
  /*border: 1px solid #000;*/
}

.config-class-card__action-button {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
