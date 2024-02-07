const sumAll = function(start, finish) {
    let sum = 0;
    let array = [start, finish]
    for(i = start; i <= array.length; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
