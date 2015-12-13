/*
 Same as house2 but with a wall sign
*/
var house3 = function() {

    var width=5
    var length=10

    this.box(blocks.cobblestone,width,1,length);
    this.up(1);
    this.box0(blocks.cobblestone,width,6,length);
    this.up(6);
    this.prism(blocks.glowstone,width,length);
    //New stuff begins here -->
    this.down(3);
    this.right(3);
    var name = "Welcome Home"
    this.wallsign(name);

    return;
};
var Drone = require('../drone/drone').Drone;
Drone.extend('house3',house3);
