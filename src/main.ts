import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Events } from "./types";
import mitt from "mitt";
import vue3Spinner from "vue3-spinner";

const emitter = mitt<Events>();

const app = createApp(App);

app.provide("emitter", emitter);
app.use(vue3Spinner);

app.mount("#app");
