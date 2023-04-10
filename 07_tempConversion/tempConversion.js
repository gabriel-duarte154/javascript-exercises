const convertToCelsius = function(temInFah) {
  let tenConvert = Math.round(((temInFah - 32) * (5 / 9)) * 10) / 10;
  
  return tenConvert;

};

const convertToFahrenheit = function(temInCel) {
  let tenConvert = Math.round(((temInCel * (9 / 5)) + 32) * 10) / 10;
  return tenConvert;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
