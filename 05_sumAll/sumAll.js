const sumAll = function(min, max) {
    let sum = 0;
    let n1 = 0;
    let n2 = 0;
    if (min < 0 || max < 0 || 
        typeof(min) != "number" || typeof(max) != "number"){
        return "ERROR"
    };
    if (min < max) {
        n1 = min;
        n2 = max;
    } else {
        n1 = max;
        n2 = min;
    };
    sum = ((((n2 - n1) + 1) * (n1 + n2)) / 2 );
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
