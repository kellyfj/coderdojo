var stairsdown = function(blockType, width, down){
  if (typeof width === 'undefined')
    width = 1;
  if (typeof height === 'undefined')
    height = -1;
  if (typeof blockType === 'undefined'){
    blockType = blocks.stairs.oak;
  }


  this.chkpt('_stairs0');

  //Clear the space ahead
  this.box(blocks.air,width,-1*down,down);

  //Go to the bottom of the stairs and work UP
  this.down(down-1);
  this.fwd(down-1);
  while (down > 0) {
    this.right(width-1);
    this.turn(2).box(blockType,width,1,1).turn(2);
    this.left(width-1);
    this.back().up();
    down -= 1;
  }
  this.move('_stairs0');

}
var Drone = require('../drone/drone').Drone;
Drone.extend('stairs0',stairsdown);
