const convertToCelsius = function(fDeg) {
  return +((fDeg - 32) * 5/9).toFixed(1);
};

const convertToFahrenheit = function(cDeg) {
  return +((cDeg * 9/5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
