import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Events } from "./types";
import mitt from "mitt";

const emitter = mitt<Events>();

const app = createApp(App);

app.provide("emitter", emitter);

app.mount("#app");
