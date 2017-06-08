(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/// <reference path="./../../node_modules/@types/easeljs/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
class BaseScene {
    constructor(canvas_id, fps = 30) {
        const canvas = document.getElementById(canvas_id);
        if (canvas != null) {
            this.stage = new createjs.Stage(canvas);
            createjs.Ticker.setFPS(fps);
            createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
            //メソッドをコールバック引数にして渡すとthisが飛ぶので必ずbindする
            createjs.Ticker.addEventListener("tick", this.update.bind(this));
            this.initStage();
        }
        else {
            console.dir("canvas_id is null");
        }
        return this;
    }
}
exports.BaseScene = BaseScene;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EntryScene_1 = require("./EntryScene");
class Controller {
    constructor(canvas_id) {
        this.currentState = new EntryScene_1.EntryScene(canvas_id);
    }
}
exports.Controller = Controller;

},{"./EntryScene":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseScene_1 = require("./BaseScene");
class EntryScene extends BaseScene_1.BaseScene {
    constructor(canvas_id, fps = 30) {
        super(canvas_id);
        return this;
    }
    initStage() {
        console.dir("EntryScene.initstage() is TBI now.");
        let starContainer = new createjs.Container();
        this.stage.addChild(starContainer);
        ["#f25424", "#2eadf7", "#fbff93"].forEach(function (element, index) {
            console.dir(index);
            [];
            var graphics = new createjs.Graphics().beginFill(element).drawCircle(this.stage.canvas.width / 2 + index * 200 - (index * index * 50), this.stage.canvas.height / 2, 24 / (index + 1));
            this.stage.getChildAt(0).addChild(new createjs.Shape(graphics));
        }.bind(this));
        let textContainer = new createjs.Container();
        this.stage.addChild(textContainer);
        let text1 = new createjs.Text("EntryScene is TBI now.", "24px sans-serif", "#EDE1E2");
        textContainer.addChild(text1).set({ graphics: text1, x: this.stage.canvas.width / 1.7, y: this.stage.canvas.height / 1.1, alpha: 0.5 });
        this.stage.update();
        return this;
    }
    update() {
        console.dir("EntryScene.update() is TBI now.");
        let starContainer = this.stage.getChildAt(0);
        for (let i = 0; i < 3; i++) {
            let star = starContainer.getChildAt(i);
            if (i == 1) {
                star.x += 1;
                star.y += 1;
            }
        }
        this.stage.update();
        return this;
    }
}
exports.EntryScene = EntryScene;

},{"./BaseScene":1}],4:[function(require,module,exports){
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

},{"./Controller":2}]},{},[4]);
