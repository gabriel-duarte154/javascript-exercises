const palindromes = function (string) {
   replaceString = string.toLowerCase().replace(/[^a-z]/g, "");
   return replaceString.split("").reverse().join("") == replaceString;
};

// Do not edit below this line
module.exports = palindromes;
