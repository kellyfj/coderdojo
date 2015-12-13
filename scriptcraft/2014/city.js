var city = function(cityblocks, buildings, cityname) {
    var i , j;
    if ( typeof cityblocks == 'undefined' ) {
        cityblocks = 3;
    }
    if ( typeof buildings == 'undefined' ) {
        buildings = 3;
    }
    if ( typeof cityname == 'undefined' ) {
        cityname = "Boston";
    }
    this.chkpt('start'); // saves the drone position so it can return there later
    floors = 3;
    building_size = 7;
    city_block_width=10;

    for ( j = 0; j < cityblocks; j++) {
	    this.chkpt('blockstart');
	    // Create a "row" of buildings
	    for ( i = 0; i < buildings; i++ ) {
		this.road(4,city_block_width);
		this.right(6); //road width = 4 plus 2 for border
		this.up().sky(floors,building_size).down();
		this.right(building_size);
	    }
            this.road(4,city_block_width);
            //move to next row
            this.move('blockstart');
            this.fwd(city_block_width);
     }
    //Move drone above city
    this.up(floors*4 + 20);
    this.blocktype(cityname, blocks.glowstone);

    return this.move('start'); // return to where we started
};
var Drone = require('../drone/drone').Drone;
Drone.extend('city',city);
