(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/HeroControll.js.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6d287Dvfz5LtZbLwawSh6k9', 'HeroControll.js', __filename);
// scripts/HeroControll.js.ts

// game art from : https://openpixelproject.itch.io/opp2017sprites
var MOVE_LEFT = 1;
var MOVE_RIGHT = 2;
cc.macro.ENABLE_TILEDMAP_CULLING = false;
cc.Class({
    extends: cc.Component,
    properties: {
        maxSpeed: 500,
        jumps: 2,
        acceleration: 1500,
        jumpSpeed: 200,
        drag: 600
    },
    // use this for initialization
    onLoad: function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this._moveFlags = 0;
        this._up = false;
        this.body = this.getComponent(cc.RigidBody);
    },
    onKeyDown: function (event) {
        switch (event.keyCode) {
            case cc.KEY.a:
            case cc.KEY.left:
                this._moveFlags |= MOVE_LEFT;
                break;
            case cc.KEY.d:
            case cc.KEY.right:
                this._moveFlags |= MOVE_RIGHT;
                break;
            case cc.KEY.up:
                if (!this._upPressed) {
                    this._up = true;
                }
                this._upPressed = true;
                break;
        }
    },
    onKeyUp: function (event) {
        switch (event.keyCode) {
            case cc.KEY.a:
            case cc.KEY.left:
                this._moveFlags &= ~MOVE_LEFT;
                break;
            case cc.KEY.d:
            case cc.KEY.right:
                this._moveFlags &= ~MOVE_RIGHT;
                break;
            case cc.KEY.up:
                this._upPressed = false;
                break;
        }
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var speed = this.body.linearVelocity;
        if (this._moveFlags === MOVE_LEFT) {
            // this.anim.play('walk');
            if (this.node.scaleX > 0) {
                this.node.scaleX *= -1;
            }
            speed.x -= this.acceleration * dt;
            if (speed.x < -this.maxSpeed) {
                speed.x = -this.maxSpeed;
            }
        }
        else if (this._moveFlags === MOVE_RIGHT) {
            // this.anim.play('walk');
            if (this.node.scaleX < 0) {
                this.node.scaleX *= -1;
            }
            speed.x += this.acceleration * dt;
            if (speed.x > this.maxSpeed) {
                speed.x = this.maxSpeed;
            }
        }
        else {
            if (speed.x != 0) {
                var d = this.drag * dt;
                if (Math.abs(speed.x) <= d) {
                    speed.x = 0;
                    // this.anim.play('idle');
                }
                else {
                    speed.x -= speed.x > 0 ? d : -d;
                }
            }
        }
        if (Math.abs(speed.y) < 1) {
            this.jumps = 2;
        }
        if (this.jumps > 0 && this._up) {
            speed.y = this.jumpSpeed;
            this.jumps--;
        }
        this._up = false;
        this.body.linearVelocity = speed;
    },
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=HeroControll.js.js.map
        