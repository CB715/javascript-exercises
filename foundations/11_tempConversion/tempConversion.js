const convertToCelsius = function(temp) {
farenheitToCelsius = Math.round(((temp - 32) * 5/9) * 10) / 10;
return farenheitToCelsius;
};

const convertToFahrenheit = function(temp) {
  celsiusToFarenheit = Math.round(((temp * 9/5) + 32) * 10) / 10;
  return celsiusToFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
