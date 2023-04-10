const removeFromArray = function(array, ...removed) {
    let newArray = [];
    for (i in array) {
        if (removed.includes(array[i])){continue};
        newArray.push(array[i]);
    };
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
