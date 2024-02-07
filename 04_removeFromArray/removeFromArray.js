var removeFromArray = function (array, ...args) {
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if (array[i] !== args){
      newArray.push(array[i]);
    }  
  }
  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;

//seguito questo esempio ma non funziona 
//https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/#how-to-remove-an-element-from-an-array-while-mutating-the-array