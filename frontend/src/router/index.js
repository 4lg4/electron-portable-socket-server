import Vue from "vue";
import Router from "vue-router";

import InitialModule from "@/modules/initial-module.vue";
import CommandsModule from "@/modules/commands-module.vue";
import CommandModule from "@/modules/command-module.vue";
import ConfigModule from "@/modules/config-module.vue";

Vue.use(Router);

const router = new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "DashboardModule",
      component: InitialModule
    },
    {
      path: "/command",
      name: "command-module",
      component: CommandModule
    },
    {
      path: "/commands",
      name: "CommandsModule",
      component: CommandsModule
    },
    {
      path: "/config",
      name: "ConfigModule",
      component: ConfigModule
    }
    // {
    //   path: "/config",
    //   name: "ConfigModule",
    //   component: ConfigModule
    // }
  ]
});

export default router;
