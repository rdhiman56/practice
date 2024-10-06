// vowels : aeiou

const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';

let vowelsCount = 0;
let consonantsCount = 0;

function CountVowelsConsonantsString(inputString) {
    inputString = inputString.toLowerCase().replace(/ /g, "");
    for(let i=0; i<= inputString.length-1; i++){
        if(vowels.includes(inputString[i])){
            vowelsCount++
        }else if(consonants.includes(inputString[i])){
            consonantsCount++
        }
    }
    return {vowelsCount, consonantsCount}
}

console.log(CountVowelsConsonantsString("Hello World"));