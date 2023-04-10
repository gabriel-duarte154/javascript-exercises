const add = function(value, valueAdd) {
	return value + valueAdd;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	for ( number in array) {
    sum += array[number];
  };
  return sum;
};

const multiply = function(numbers) {
  let mult = 1;
  for (i in numbers) {
    mult *= numbers[i];
  };
  return mult;
};

const power = function(base, expoente) {
  return base ** expoente;
};

const factorial = function(number) {
  let fact = 1;
	if (number == 0) {return 1;};
  for (let i = fact; i <= number; i++) {
    fact *= i;
  };
  return (fact);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
