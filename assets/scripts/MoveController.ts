const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property
    Y:number = -250;

    public keys : Map<number,boolean> = new Map();
    jumping:boolean = false;


    onKeyDown(e){
        this.keys.set(e.keyCode,true)
        switch (e.keyCode) {
            // case cc.macro.KEY.right:
            //         if(this.keys.has(cc.macro.KEY.shift))
            //             console.log("Right and SHIFT")
            //         else
            //             console.log("Right")
            //     break;
            case cc.macro.KEY.space:
                    this.jump()
                break;
            case cc.macro.KEY.right:
                this.forward()
                break;
            case cc.macro.KEY.left:
                this.backward()
                break;
            default:
                break;
        }
    }
    onKeyUp(e){
        this.keys.delete(e.keyCode,true)
    }
    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)
    }

    jump(){
        console.log("in jump function")
        var jump = cc.sequence(cc.moveBy(0.3, 0, 250), cc.moveBy(0.3, 0, -250));
        this.node.runAction(jump); 
    }
    forward(){
        console.log("in forward function")
        var run = cc.moveBy(0.3, 30, 0)
        this.node.runAction(run); 
    }
    backward(){
        console.log("in forward function")
        var run = cc.moveBy(0.3, -30, 0)
        this.node.runAction(run); 
    }

    start () {

    }

    // update (dt) {}
}
