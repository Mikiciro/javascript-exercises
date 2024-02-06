var removeFromArray = function (array, ...args) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== args) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
