const snakeCase = function(string) {
    string = string.replace(/\.\./g, " ");
    if (string.indexOf(" ") < 0) {
        string = string.replace(/([A-Z])/g, " $1");
    };
    return string
    .trim()
    .toLowerCase()
    .replace(/[?\|!\|.\|,]/g, "")
    .replace(/[-]/g, " ")
    .split(" ")
    .join("_")
    
};
    



console.log(snakeCase("kabel-case"));
// Do not edit below this line
module.exports = snakeCase;
