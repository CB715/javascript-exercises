const palindromes = function (input) {

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    const newString = input.toLowerCase().split("").filter((char) => chars.includes(char)).join("");
    let reversed = newString.split("").reverse().join("");

    return newString == reversed;
};

// Do not edit below this line
module.exports = palindromes;
