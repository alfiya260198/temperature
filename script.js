function convertTemperature() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unitSelect").value;
    let result = document.getElementById("result");

    // Validate Input
    if (temp === "" || isNaN(temp)) {
        result.style.color = "red";
        result.innerText = "Please enter a valid number!";
        return;
    }

    temp = parseFloat(temp);
    let convertedTemp, convertedUnit;

    // Conversion Logic
    if (unit === "Celsius") {
        convertedTemp = (temp * 9/5) + 32;
        convertedUnit = "°F (Fahrenheit)";
    } 
    else if (unit === "Fahrenheit") {
        convertedTemp = (temp - 32) * 5/9;
        convertedUnit = "°C (Celsius)";
    }
    else if (unit === "Kelvin") {
        convertedTemp = temp - 273.15;
        convertedUnit = "°C (Celsius)";
    }

    // Display Result
    result.style.color = "#F4A261"; /* Orange */
    result.innerText = `Converted Temperature: ${convertedTemp.toFixed(2)} ${convertedUnit}`;
}
