import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import App from "./app.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

import Buefy from "buefy";
import "buefy/dist/buefy.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSave, faPlus, faEdit, faTachometerAlt, faSlidersH, faTerminal, faStream } from '@fortawesome/free-solid-svg-icons'
library.add(faSave, faPlus, faEdit, faTachometerAlt, faSlidersH, faTerminal, faStream);
Vue.component("vue-fontawesome", FontAwesomeIcon);
Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas"
});

/* eslint-disable no-new */
window.App = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
