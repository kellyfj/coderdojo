var mine3 = function() {
    width = 5;
    height = 64;
    blockType = blocks.stairs.quartz;


  this.chkpt('_top');
  this.down(height);
  //Clear the space ahead
  this.box(blocks.air,width,height,height);

  //Go to the bottom of the stairs and work UP
  //this.down(height-1);
  this.fwd(height-1);
  while (height > 0) {
    this.right(width-1);
    this.turn(2).box(blockType,width,1,1).turn(2);
    this.left(width-1);
    this.back().up();
    height -= 1;
  }
  this.move('_top');

}
var Drone = require('../drone/drone').Drone;
Drone.extend('mine3',mine3);
