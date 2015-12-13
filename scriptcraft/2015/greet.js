var greet = function() {

   echo("Hello world!");
};
var Drone = require('../drone/drone').Drone;
Drone.extend('greet1',greet);
