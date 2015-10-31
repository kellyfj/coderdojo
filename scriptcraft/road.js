//var Drone = require('./drone').Drone;
var Drone = require('../drone/drone').Drone;
var blocks = require('blocks');

function road( width, depth ) {
  if ( typeof width == 'undefined' ) { 
    width = 10;
  }
  if ( typeof depth == 'undefined' ) { 
    depth = width;
  }
  // make sure grass is present first
  this.chkpt('start');

  this.box( blocks.grass, 1, 1, depth ).right();
  this.box( blocks.brick.stone, width, 1, depth ).right(width);
  this.box( blocks.grass, 1, 1, depth );
   
  return this.move('start');
}
Drone.extend(road);
