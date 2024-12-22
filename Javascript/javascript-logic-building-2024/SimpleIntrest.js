// S.I. = (P × R × T)/100

function SimpleIntrest(principle, rate, time) {
    let simpleIntrest = principle * rate * time/ 100;
    return simpleIntrest
}

console.log(SimpleIntrest(1000 , 3.2 , 2))