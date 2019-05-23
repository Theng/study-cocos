"use strict";
cc._RF.push(module, '6b5bbOOaNtIpJ6CdkvAxm1h', 'PhysicManager');
// scripts/PhysicManager.ts

cc.Class({
    extends: cc.Component,
    properties: {
        size: cc.size(0, 0),
        mouseJoint: true
    },
    // use this for initialization
    onLoad: function () {
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        var width = this.size.width || this.node.width;
        var height = this.size.height || this.node.height;
        var node = new cc.Node();
        var body = node.addComponent(cc.RigidBody);
        body.type = cc.RigidBodyType.Static;
        if (this.mouseJoint) {
            // add mouse joint
            var joint = node.addComponent(cc.MouseJoint);
            joint.mouseRegion = this.node;
        }
        this._addBound(node, 0, height / 2, width, 20);
        this._addBound(node, 0, -height / 2, width, 20);
        this._addBound(node, -width / 2, 0, 20, height);
        this._addBound(node, width / 2, 0, 20, height);
        node.parent = this.node;
    },
    _addBound: function (node, x, y, width, height) {
        var collider = node.addComponent(cc.PhysicsBoxCollider);
        collider.offset.x = x;
        collider.offset.y = y;
        collider.size.width = width;
        collider.size.height = height;
    }
});

cc._RF.pop();