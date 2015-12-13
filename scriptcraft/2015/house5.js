/*
Same as house 4 but with Windows
*/
var house5 = function() {

    var width=5
    var length=10

    this.box(blocks.cobblestone,width,1,length);
    this.up(1);
    //New stuff begins here -->
    this.box0(blocks.cobblestone,width,2,length);
    this.up(2);
    this.box0(blocks.glass,width,1,length);
    this.up(1);
    this.box0(blocks.cobblestone,width,3,length);
    this.up(3);
    //--> To here
    this.prism(blocks.glowstone,width,length);
    this.down(3);
    this.right(2);
    var name = "Welcome Home"
    this.wallsign(name);
    this.down(3);
    this.door();

    return;
};
var Drone = require('../drone/drone').Drone;
Drone.extend('house5',house5);
