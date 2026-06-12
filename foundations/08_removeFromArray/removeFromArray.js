const removeFromArray = function(array, ...theArgs) {
    let modifiedArray = [];
    argsArray = Array.from(theArgs);
    
    for (let i = 0; i < array.length; i++) {
        if (!argsArray.includes(array[i]))
            modifiedArray.push(array[i]);
    }
    
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
