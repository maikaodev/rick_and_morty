// FILE: main.js

import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarIconSet from "quasar/icon-set/fontawesome-v6";

import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

import "quasar/src/css/index.sass";

import App from "./App.vue";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {},
  iconSet: quasarIconSet,
});

myApp.mount("#app");
