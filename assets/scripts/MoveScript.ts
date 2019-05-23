const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    speed:number = 100;

    start () {

    }

    update (dt) {
        this.node.setPosition((this.node.position.x += this.speed * dt),this.node.position.y)
        if(this.node.position.x > (this.node.parent.width/2)){
            this.node.setPosition(-this.node.parent.width/2,this.node.position.y)
        }
    }
}
