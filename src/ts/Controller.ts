import { BaseScene } from "./BaseScene";
import { EntryScene } from "./EntryScene";

export class Controller {
    private currentState : BaseScene;
    constructor(canvas_id : string){
        this.currentState = new EntryScene(canvas_id);
        
    }
    
}