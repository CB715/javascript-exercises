const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sumOfArray = 0;
	array.forEach(element => { sumOfArray += element });
  return sumOfArray;
};

const multiply = function(arr) {
  let multi = 1;
  arr.forEach(num => {multi *= num});
  return multi;
};

const power = function(a, b) {
	let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  };
  return result;
};

const factorial = function(n) {
	if (n <= 1) {
    return 1;
  } else {
  return n * factorial(n - 1);
  }
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
