import Vue from "vue";
import VueCompositionApi, { reactive, computed } from "@vue/composition-api";
Vue.use(VueCompositionApi);

import { get as getLocalState, set as setLocalState } from "./storage";

const state = reactive({
  command: {},
  commands: [],
  classes: [
    {
      id: 1,
      name: "ALGA",
      description: "ALGA classes"
    }
  ],
  ...getLocalState()
});

export const classesIndexed = computed(() =>
  state.classes.reduce((reduced, item) => {
    reduced[item.id] = item;
    return reduced;
  }, {})
);

export function save() {
  setLocalState(state);
}

export default state;
