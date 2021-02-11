$(document).ready(function() {
  let thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat._temp);
    $('#temperature').css('class', thermostat.usage());
  }

  function updateStatus(status) {
    $('#power-saving-status').text(status)
  }

  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermostat.increaseTemp(); // update model
    updateTemperature();
  });

  $('#temperature-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
    updateStatus('on');
  });

  $('#powersaving-on').click(function() {
    thermostat.saveModeOn();
    updateStatus('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.saveModeOff();
    updateStatus('off');
    updateTemperature();
  });

});
