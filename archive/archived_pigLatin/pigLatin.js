function pigLatin(string) {
    return string.split(" ").map((word) => {
        let firstVowal = firstVowalIndex(word);
        let beginning = word.slice(firstVowal);
        let ending = word.slice(0, firstVowal);
        return `${beginning}${ending}ay`;
    }).join(" ");
};


const firstVowalIndex = (word) => {
    const vowal = word.match(/[aeiou]/g);
    if (vowal[0] == "u" && word[(word.indexOf(vowal[0]) -1)] == "q" ) {
        return word.indexOf(vowal[0]) + 1;
    }
    return word.indexOf(vowal[0]);
};


console.log(pigLatin("To dentro e agora muito na ativa"))


// Do not edit below this line
module.exports = pigLatin;
