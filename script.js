function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  let result;

  if (isNaN(temperature)) {
    result = "Please enter a valid number.";
  } else {
    let celsiusTemp;
    if (unit === "celsius") {
      celsiusTemp = temperature;
      result = `${temperature}°C = ${((temperature * 9) / 5 + 32).toFixed(
        2
      )}°F = ${(temperature + 273.15).toFixed(2)}K`;
    } else if (unit === "fahrenheit") {
      celsiusTemp = ((temperature - 32) * 5) / 9;
      result = `${temperature}°F = ${celsiusTemp.toFixed(2)}°C = ${(
        celsiusTemp + 273.15
      ).toFixed(2)}K`;
    } else if (unit === "kelvin") {
      celsiusTemp = temperature - 273.15;
      result = `${temperature}K = ${celsiusTemp.toFixed(2)}°C = ${(
        (celsiusTemp * 9) / 5 +
        32
      ).toFixed(2)}°F`;
    }
  }

  document.getElementById("result").innerText = result;
}
