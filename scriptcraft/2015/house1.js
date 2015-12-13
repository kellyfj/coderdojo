var myfunction = function() {
    var length=10;
    var width=70;

    //This is the floor
    this.box(blocks.cobblestone,width,1,length);
    this.up(1);
    //These are the walls
    this.box0(blocks.cobblestone,width,6,length);
    this.up(6);
    //This is the roof
    this.prism(blocks.glowstone,width,length);
}

var Drone = require('../drone/drone').Drone;
Drone.extend('house1',myfunction);
