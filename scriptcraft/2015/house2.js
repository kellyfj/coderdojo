/*
 Same as house1 but using variables
*/
var house2 = function() {

    var width=5
    var length=10

    this.box(blocks.cobblestone,width,1,length);
    this.up(1);
    this.box0(blocks.cobblestone,width,6,length);
    this.up(6);
    this.prism(blocks.glowstone,width,length);

    return;
};
var Drone = require('../drone/drone').Drone;
Drone.extend('house2',house2);
