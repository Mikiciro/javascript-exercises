const repeatString = function (string, num) {
  while (num >= 0) {
    return string.repeat(num);
  }
  if (num < 0) {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
