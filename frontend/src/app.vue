<template>
  <div id="app">
    <div class="app_header">
      <router-link tag="div" to="/" class="menu__item">
        <div class="menu__item__icon">
          <b-icon pack="fas" icon="tachometer-alt" size="is-small"></b-icon>
        </div>
        <div class="menu__item__title">DASHBOARD</div>
      </router-link>
      <router-link tag="div" to="/streaming" class="menu__item">
        <div class="menu__item__icon">
          <b-icon pack="fas" icon="stream" size="is-small"> </b-icon>
        </div>
        <div class="menu__item__title">STREAMING</div>
      </router-link>
      <router-link tag="div" to="/commands" class="menu__item">
        <div class="menu__item__icon">
          <b-icon pack="fas" icon="terminal" size="is-small"> </b-icon>
        </div>
        <div class="menu__item__title">COMMANDS</div>
      </router-link>
      <router-link tag="div" to="/config" class="menu__item">
        <div class="menu__item__icon">
          <b-icon pack="fas" icon="sliders-h" size="is-small"> </b-icon>
        </div>
        <div class="menu__item__title">CONFIG</div>
      </router-link>
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
  overflow: hidden;
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

.app_header {
  margin: 10px 0;
}

.app_header .menu__item {
  padding: 10px;
  width: 150px;
  color: #333333;
  display: inline-block;
  cursor: pointer;
}

.app_header .menu__item__icon .icon {
  vertical-align: text-top;
}

.app_header .menu__item__icon {
  height: 100%;
  width: 25px;
  display: inline-block;
}

.menu__item__title {
  display: inline-block;
  height: 100%;
  width: 105px;
}

.app_header .menu__item.router-link-exact-active {
  background-color: #167df0;
  color: #ffffff;
  font-weight: bold;
}

input[type="search"] {
  box-sizing: border-box !important;
}
</style>
