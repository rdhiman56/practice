function OddEven(num) {
    const remainder = num%2;
if(remainder == 0){
    console.log("It's a even number");
}else {
    console.log("It's a Odd number !!");
}
}

OddEven(15);


// Second way

function OddEven2(n) {
  return n%2 === 0 ? `${n} is Even` : `${n} is Odd number`
}

console.log(OddEven2(18));

// Switch Case
function OddEven3(n){
    const result = n%2;
    switch(result){
        case 0:
            return `${n} is Even number`;
        case 1:
            return `${n} is Odd number`;
        default:
            return 'somthing went wrong!!'
    }
}

console.log(OddEven3(3));
