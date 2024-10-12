function CalculateFactors(inputString) {
    if(inputString < 1){
        throw new Error("String should be greater then zero");
    }
    let result = [];
    for(let i=1; i<= inputString; i++) {
        if(inputString % i == 0){
            result.push(i);
        }
    }
    return result;
}

console.log("Factor of 4 are=>",CalculateFactors(4));