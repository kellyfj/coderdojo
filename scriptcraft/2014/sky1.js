var sky = function() {

        var width = 5;
        var length = 7;
        this.box(blocks.stone,width,1,length);
        this.up();
        this.box0(blocks.glass_pane,width,3,length);

};
var Drone = require('../drone/drone').Drone;
Drone.extend('sky',sky);
