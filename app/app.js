import Vue from "nativescript-vue";
import "@nota/nativescript-accessibility-ext";

import Home from "./components/Home";

new Vue({
    render: h => h("frame", [h(Home)])
}).$start();
