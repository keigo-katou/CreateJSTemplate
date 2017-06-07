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
        let sun = new createjs.Shape();
        sun.graphics.beginFill("#f25424").drawCircle(this.stage.canvas.width / 2, this.stage.canvas.height / 2, 24);
        //sun.regX = 12;
        //sun.regY = 12;
        starContainer.addChild(sun);
        let earth = new createjs.Shape();
        earth.graphics.beginFill("#2eadf7").drawCircle((this.stage.canvas.width / 2) + 150, this.stage.canvas.height / 2, 12);
        earth.regX = this.stage.canvas.width / 2;
        earth.regY = this.stage.canvas.width / 2;
        starContainer.addChild(earth);
        let moon = new createjs.Shape();
        moon.graphics.beginFill("#fbff93").drawCircle(this.stage.canvas.width / 2 + 200, this.stage.canvas.height / 2, 6);
        //moon.regX = 3;
        //moon.regY = 3;
        starContainer.addChild(moon);
        starContainer.regX = this.stage.canvas.width / 2;
        starContainer.regY = this.stage.canvas.heigth / 2;
        let textContainer = new createjs.Container();
        this.stage.addChild(textContainer);
        let text1 = new createjs.Text("EntryScene is TBI now.", "24px sans-serif", "#EDE1E2");
        textContainer.addChild(text1).set({ graphics: text1, x: this.stage.canvas.width / 2, y: this.stage.canvas.height / 2, alpha: 0.5 });
        this.stage.update();
        return this;
    }
    update() {
        console.dir("EntryScene.update() is TBI now.");
        /*
        for (let i=0; i<this.stage.getChildByName("starContainer").numChildren; i++){
            this.stage.getChildByName("starContainer").getChildIndex(i).rotation+=1;

        }
        //this.stage.getChildAt(0).getChildAt(1).rotation += 1;
        */
        this.stage.update();
        return this;
    }
}
exports.EntryScene = EntryScene;
