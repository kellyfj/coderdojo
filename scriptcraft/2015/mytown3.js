var mytown3 = function() {

  for(i=0; i< 5; i++) {
    this.chkpt('start');
    this.house7();
    this.move('start')

    this.right(10);
  }
    return;
};
var Drone = require('../drone/drone').Drone;
Drone.extend('mytown3',mytown3);
