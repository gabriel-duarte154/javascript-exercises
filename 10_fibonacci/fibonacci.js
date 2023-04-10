const fibonacci = function(position) {
    if (position < 0){return "OOPS"}
    let a = 1;
    let b = 0;
    let fibonacciPosition;
    for (let i = 1; i <= position; i++) {
        fibonacciPosition = a + b;
        b = fibonacciPosition;
        a = b - a;
    };
    return fibonacciPosition;
};

// Do not edit below this line
module.exports = fibonacci;
