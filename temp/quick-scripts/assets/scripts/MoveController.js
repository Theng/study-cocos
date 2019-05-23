(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/MoveController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd48eey8KpFKQbS3uH6JsDL8', 'MoveController', __filename);
// scripts/MoveController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Y = -250;
        _this.keys = new Map();
        _this.jumping = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onKeyDown = function (e) {
        this.keys.set(e.keyCode, true);
        switch (e.keyCode) {
            // case cc.macro.KEY.right:
            //         if(this.keys.has(cc.macro.KEY.shift))
            //             console.log("Right and SHIFT")
            //         else
            //             console.log("Right")
            //     break;
            case cc.macro.KEY.space:
                this.jump();
                break;
            case cc.macro.KEY.right:
                this.forward();
                break;
            case cc.macro.KEY.left:
                this.backward();
                break;
            default:
                break;
        }
    };
    NewClass.prototype.onKeyUp = function (e) {
        this.keys.delete(e.keyCode, true);
    };
    NewClass.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass.prototype.jump = function () {
        console.log("in jump function");
        var jump = cc.sequence(cc.moveBy(0.3, 0, 250), cc.moveBy(0.3, 0, -250));
        this.node.runAction(jump);
    };
    NewClass.prototype.forward = function () {
        console.log("in forward function");
        var run = cc.moveBy(0.3, 30, 0);
        this.node.runAction(run);
    };
    NewClass.prototype.backward = function () {
        console.log("in forward function");
        var run = cc.moveBy(0.3, -30, 0);
        this.node.runAction(run);
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property
    ], NewClass.prototype, "Y", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
        //# sourceMappingURL=MoveController.js.map
        