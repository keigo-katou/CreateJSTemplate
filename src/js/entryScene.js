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
