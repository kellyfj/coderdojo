var house = function() {

    
    this.box(blocks.cobblestone,5,1,10);
    this.up(1);
    this.box0(blocks.cobblestone,5,6,10);
    this.up(6);
    this.prism(blocks.glowstone,5,10); 

    return;
};
var Drone = require('../drone/drone').Drone;
Drone.extend('house',house);
