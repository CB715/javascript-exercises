const fibonacci = function(input) {

let updatedInput;
let firstValue = 1;
let secondValue = 0;
let current = 0;
// check fibonacci sequence and start at [0] and [1], update variables with for loop < updatedInput

    if (typeof(input) != "number") {
        updatedInput = parseInt(input)
    } else {
        updatedInput = input;
    };

    if (updatedInput < 0) { 
        return "OOPS";
    }

    for (let i = 0; i < updatedInput; i++) {
    current = firstValue + secondValue;
    firstValue = secondValue;
    secondValue = current;
    }
    
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
