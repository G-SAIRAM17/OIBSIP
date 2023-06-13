function convertTemperature() {
    var temperatureInput = document.getElementById("temperature");
    var unitInput = document.getElementById("unit");
    var resultElement = document.getElementById("result");
    
    var temperature = temperatureInput.value;
    var unit = unitInput.value;
    
    if (isNaN(temperature)) {
      resultElement.innerHTML = "Invalid temperature";
      return;
    }
    
    if (unit === "celsius") {
      var convertedTemperature = (temperature * 9/5) + 32;
      resultElement.innerHTML = temperature + "°C is " + convertedTemperature.toFixed(2) + "°F";
    } else if (unit === "fahrenheit") {
      var convertedTemperature = (temperature - 32) * 5/9;
      resultElement.innerHTML = temperature + "°F is " + convertedTemperature.toFixed(2) + "°C";
    }
  }