// Initialize the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set focus on temperature input when page loads
  document.getElementById('temperature').focus();
  
  // Add event listener for Enter key
  document.getElementById('temperature').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      convertTemperature();
    }
  });
});

function convertTemperature() {
  const temperatureInput = document.getElementById('temperature');
  const unitSelect = document.getElementById('unit');
  const resultDiv = document.getElementById('result');
  
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;
  
  // Clear previous styling
  resultDiv.className = 'result';
  
  // Validate input
  if (isNaN(temperature)) {
    resultDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter a valid number.';
    resultDiv.classList.add('error');
    temperatureInput.focus();
    return;
  }
  
  // Show loading animation
  resultDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Converting...';
  
  // Simulate a small delay for better UX (feels more like processing)
  setTimeout(() => {
    let result;
    let celsiusTemp;
    
    // Calculate conversions based on selected unit
    if (unit === 'celsius') {
      celsiusTemp = temperature;
      const fahrenheit = (temperature * 9 / 5 + 32).toFixed(2);
      const kelvin = (temperature + 273.15).toFixed(2);
      
      result = `
        <div><strong>${temperature}°C</strong> is equal to:</div>
        <div><i class="fas fa-temperature-high"></i> ${fahrenheit}°F</div>
        <div><i class="fas fa-temperature-low"></i> ${kelvin}K</div>
      `;
    } else if (unit === 'fahrenheit') {
      celsiusTemp = (temperature - 32) * 5 / 9;
      const celsius = celsiusTemp.toFixed(2);
      const kelvin = (celsiusTemp + 273.15).toFixed(2);
      
      result = `
        <div><strong>${temperature}°F</strong> is equal to:</div>
        <div><i class="fas fa-temperature-high"></i> ${celsius}°C</div>
        <div><i class="fas fa-temperature-low"></i> ${kelvin}K</div>
      `;
    } else if (unit === 'kelvin') {
      celsiusTemp = temperature - 273.15;
      const celsius = celsiusTemp.toFixed(2);
      const fahrenheit = (celsiusTemp * 9 / 5 + 32).toFixed(2);
      
      result = `
        <div><strong>${temperature}K</strong> is equal to:</div>
        <div><i class="fas fa-temperature-high"></i> ${celsius}°C</div>
        <div><i class="fas fa-temperature-low"></i> ${fahrenheit}°F</div>
      `;
    }
    
    // Display the result with success styling
    resultDiv.innerHTML = result;
    resultDiv.classList.add('success');
    
    // Add animation effect
    resultDiv.style.animation = 'none';
    setTimeout(() => {
      resultDiv.style.animation = 'fadeIn 0.5s';
    }, 10);
    
  }, 500); // 500ms delay for better UX
}
