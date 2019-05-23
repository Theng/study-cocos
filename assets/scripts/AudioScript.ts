const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    music:cc.AudioClip = null
    lastAudioID:number = -1

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,(e)=>{
            if(e.keyCode == cc.macro.KEY.space){
                console.log("space fire")
                this.lastAudioID = cc.audioEngine.play(this.music,false,1)
                cc.audioEngine.setFinishCallback(this.lastAudioID,()=>{
                    this.lastAudioID = -1;
                })
            }
        },this)
    }

    start () {

    }

    update (dt) {
        // if(this.lastAudioID != -1)
        //     console.log(cc.audioEngine.getCurrentTime(this.lastAudioID));
    }
}
