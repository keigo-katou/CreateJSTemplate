"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./Controller");
class main {
    static entry() {
        console.dir("あえいうえおああ");
    }
}
window.addEventListener("load", (e) => {
    main.entry();
    let controller = new Controller_1.Controller("canvas");
});
