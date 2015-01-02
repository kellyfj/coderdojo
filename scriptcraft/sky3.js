var sky3 = function(floors, size) {
    var i ;
    if ( typeof floors == 'undefined' ) {
        floors = 10;
    }
    if ( typeof size == 'undefined' ) {
        size = 6;
    }
    this.chkpt('sky3'); // saves the drone position so it can return there later
    torch = blocks.torch + ':' + Drone.PLAYER_TORCH_FACING[this.dir];
    for ( i = 0; i < floors; i++ ) {
        this.box(blocks.stone,size,1,size).up();
	this.chkpt('corner');
	for ( j=0; j< size; j++)  {
		this.fwd().right().box(torch);
	}
        this.move('corner');
        this.box0(blocks.glass_pane,size,3,size)
            .up(3);
    }

    //add a top
    this.box(blocks.stone,size,1,size).up();
    for ( j=0; j< size; j++)  {
	this.fwd().right().box(torch);
    }

    return this.move('sky3'); // return to where we started
};
var Drone = require('../drone/drone').Drone;
Drone.extend('sky3',sky3);
