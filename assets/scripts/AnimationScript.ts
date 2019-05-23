const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.getComponent(cc.Animation).play("walk")
    }

    // update (dt) {}

    halfway(){
        console.log("half way")
    }
}
