const repeatString = function(string, num) {
    // let temp = '';
    let result = '';
    if (num < 0) {
        return "ERROR"
    }

    // if (num == 0 || string =='') {
    //     return '';
    // }

    for (let i = 0; i < num; i++) {
        // temp = temp + string;
        result += string;
    }
    // return temp;
    return result;
};

// Do not edit below this line
module.exports = repeatString;
