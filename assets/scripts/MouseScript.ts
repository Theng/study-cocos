const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN,(e:cc.Event.EventMouse) => {
            console.log("Mouse down on top of selected node"+  e.currentTarget.name);
            e.bubbles = false;
        })
    }

    start () {

    }

    // update (dt) {}
}
