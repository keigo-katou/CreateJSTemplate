import { BaseScene } from "./BaseScene";

export class EntryScene extends BaseScene {
    constructor(canvas_id : string, fps : number=30){
        super(canvas_id);
        return this;

    }
    initStage(){
        console.dir("EntryScene.initstage() is TBI now.");
        let container = new createjs.Container();
        this.stage.addChild(container);

        let circle = new createjs.Shape();
        circle.graphics.beginStroke('#000');
        circle.graphics.beginFill('#114514');
        circle.graphics.drawCircle(0, 0, 50);
        circle.x = 250;
        circle.y = 70;
        container.addChild(circle);
        this.stage.update();
        return this;
    }
    update(){
        console.dir("EntryScene.update() is TBI now.");
        this.stage.getChildAt(0).rotation += 1;
        this.stage.update();
        return this;
    }
}