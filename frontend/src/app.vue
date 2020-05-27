<template>
  <div id="app">
    <div class="app_header">
      <router-link to="/" class="menu__item">
        <b-icon
        pack="fas"
        icon="tachometer-alt"
        size="is-small">
      </b-icon>
        DASHBOARD</router-link> |
      <router-link to="/streaming" class="menu__item">
        <b-icon
          pack="fas"
          icon="stream"
          size="is-small">
        </b-icon>
        STREAMING
      </router-link> |
      <router-link to="/commands" class="menu__item">
        <b-icon
          pack="fas"
          icon="terminal"
          size="is-small">
        </b-icon>
        COMMANDS</router-link> |
      <router-link to="/config" class="menu__item">
        <b-icon
          pack="fas"
          icon="sliders-h"
          size="is-small">
        </b-icon>
        CONFIG</router-link>
    </div>
    <div class="app__body">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/font/css/all.min.css";

#app {
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.app__body {
  flex: auto;
  height: -webkit-fill-available;
}

html,
body {
  background: #ddd;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

* {
  -webkit-overflow-scrolling: touch;
  outline: none;
  box-sizing: border-box;
}

*:focus {
  outline: none !important;
}

.app_header .menu__item.router-link-exact-active {
  background-color: #2da23c;
}
</style>
