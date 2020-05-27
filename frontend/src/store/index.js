import Vue from "vue";
import VueCompositionApi, { reactive } from '@vue/composition-api';
Vue.use(VueCompositionApi);

import { get as getLocalState, set as setLocalState } from './storage';

const state = reactive({
  command: {},
  commands: [],
  classes: [{
    id: 1,
    name: 'ALGA',
    description: 'ALGA classes'
  }],
  ...getLocalState()
});

export function save() {
  setLocalState(state);
}

export default state;
