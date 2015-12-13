var mytown1 = function() {

    this.house7();

    this.right(10);

    this.house7();

    this.right(10);

    this.house7();

    return;
};
var Drone = require('../drone/drone').Drone;
Drone.extend('mytown1',mytown1);
