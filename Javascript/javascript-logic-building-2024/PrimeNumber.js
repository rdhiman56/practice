// number divided by self and by 1 without reminder
function PrimeNumber (inputString) {
    for(let i=2; i< inputString; i++){
        console.log('inputString', inputString, '%', i, inputString % i);
    }
}

console.log('5', PrimeNumber(5));