var sky3 = function() {

    var width = 5;
    var length = 7;
    var i ;

    for ( i = 0; i < 10; i++ ) {
        this.box(blocks.stone,width,1,length);
        this.up();
        this.box0(blocks.glass_pane,width,3,length);
        this.up(3);
    }

    //What will this do?
    this.box(blocks.stone,width,1,length);

};
var Drone = require('../drone/drone').Drone;
Drone.extend('sky3',sky3);
