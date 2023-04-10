const repeatString = function(string, times) {
    if (times < 0){return "ERROR"};
    if (times == 0){return ""};
    let repeats = string;
    for (let i = 1; i < times; i++) {
        repeats += string;
    };
    return repeats;
};

// Do not edit below this line
module.exports = repeatString;
