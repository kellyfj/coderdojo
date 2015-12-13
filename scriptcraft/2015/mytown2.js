var mytown2 = function() {

    this.chkpt('start');
    this.house7();
    this.move('start')

    this.right(10);

    this.chkpt('start');
    this.house7();
    this.move('start')

    this.right(10);

    this.chkpt('start');
    this.house7();
    this.move('start')

    return;
};
var Drone = require('../drone/drone').Drone;
Drone.extend('mytown2',mytown2);
