/// <reference path="./../../node_modules/@types/easeljs/index.d.ts" />


export abstract class BaseScene {
    protected stage : createjs.Stage;
    constructor(canvas_id:string, fps:number=30){
        const canvas = document.getElementById(canvas_id);
        if(canvas != null){
            this.stage = new createjs.Stage(canvas);
            createjs.Ticker.setFPS(fps);
            createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
            //メソッドをコールバック引数にして渡すとthisが飛ぶので必ずbindする
            createjs.Ticker.addEventListener("tick", this.update.bind(this));
            this.initStage();
        }
        else{console.dir("canvas_id is null");}
        return this;
    }
    abstract initStage():BaseScene;
    abstract update():BaseScene;
}
