"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EntryScene_1 = require("./EntryScene");
class Controller {
    constructor(canvas_id) {
        this.currentState = new EntryScene_1.EntryScene(canvas_id);
    }
}
exports.Controller = Controller;
