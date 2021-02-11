$(document).ready(function() {
  let thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat._temp);
  };

  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermostat.increaseTemp(); // update model
    updateTemperature();
  });

  $('#temperature-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.decreaseTemp();
    updateTemperature();
  });

});
