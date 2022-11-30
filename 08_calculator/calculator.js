const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let result = 0;
  a.forEach(number => {
    result += number;
  });
  return result;
};

const multiply = function(a) {
  let result = 1;
  a.forEach(number => {
    result *= number;
  });
  return result;
};

const power = function(a,b) {
  let result = 1;
  for (let index = 0; index < b; index++) {
    result *= a;
  }
	return result;
};

const factorial = function(a) {
  let result = 1;
  for (let index = 1; index <= a; index++) {
    result *= index;
  }
	return result;
	
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
