var house7 = function() {

    var width=5
    var length=10

    this.box(blocks.cobblestone,width,1,length);
    this.up(1);
    this.box0(blocks.cobblestone,width,2,length);
    this.up(2);
    this.box0(blocks.glass,width,1,length);
    this.up(1);
    this.box0(blocks.cobblestone,width,3,length);
    this.up(3);
    this.prism(blocks.glowstone,width,length);
    this.down(3);
    this.right(2);
    this.wallsign('Welcome Home!');
    this.down(3);
    this.door();
    //New stuff begins here -->
    this.fwd().right(1);
    this.box(blocks.crafting_table).fwd();
    this.box(blocks.furnace).fwd(2);
    this.bed();
    this.fwd(4);
    this.up(3);
    this.hangtorch();
    this.up();
    this.hangtorch();

    return;
};
var Drone = require('../drone/drone').Drone;
Drone.extend('house7',house7);
