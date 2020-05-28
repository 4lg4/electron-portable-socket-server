<template>
  <div class="command-card card">
    <div class="card-content">
      <div class="command-card__desc">
        <div class="command-card__desc__class">
          <strong>
            <small>
              {{ state.cls }}
            </small>
          </strong>
        </div>
        <div class="command-card__desc__title">
          <strong>{{ value.title }}</strong>
        </div>
      </div>
    </div>

    <div class="command-card__action">
      <b-button
        type="is-info"
        icon-right="edit"
        pack="fas"
        class="command-card__action__edit"
        @click="edit"
      />
      <b-button
        type="is-success"
        icon-right="paper-plane"
        pack="fas"
        class="command-card__action__send"
      />
    </div>
  </div>
</template>

<script>
import storeState, { classesIndexed } from "@/store";
import { reactive, computed } from "@vue/composition-api";

export default {
  name: "command-card",
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      cls: computed(() => classesIndexed.value[props.value.class]?.name || "")
    });

    function edit() {
      emit("edit", props.value);
    }

    return {
      storeState,
      state,
      edit
    };
  }
};
</script>

<style scoped>
.command-card {
  /*border: 1px solid #000;*/
}

.command-card__action {
  position: absolute;
  top: 15px;
  right: 15px;
}

.command-card__action__send {
  margin-left: 10px;
}

.command-card__desc {
  display: flex;
}

.command-card__desc__class {
  margin-right: 10px;
  width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background-color: #f5f5f5;
  padding: 0 10px;
  text-align: center;
}

.command-card__desc__title {
  flex: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
