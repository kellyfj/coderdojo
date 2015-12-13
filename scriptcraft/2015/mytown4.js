var mytown4 = function() {

  for(i=0; i< 3; i++) {
    this.chkpt('left')
    for(j=0; j< 3; j++) {
      this.chkpt('start');
      this.house7();
      this.move('start')

      this.right(10);
    }
    this.move('left');
    this.fwd(15);
  }
    return;
};
var Drone = require('../drone/drone').Drone;
Drone.extend('mytown4',mytown4);
