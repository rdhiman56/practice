function SumofDigits(digit) {
  if (digit < 1) {
    throw new Error("Below 1 Not allowed!!");
  }
  const temp = digit.toString().split("");
  let sumofDigits = 0;
  temp.forEach((val, i) => {
    sumofDigits += parseInt(val);
  });
  return sumofDigits;
}

//console.log("digit Value sum", SumofDigits(-123));
// SumofDigits without convert digits to string "module 10 & value divide by 10"
function SumofDigitsWithoutConvertToString(inputValue) {
  let number = inputValue;
  let sumOfDigit = 0;
  while (number > 0) {
    let lastDigit_modulus = number % 10;
    console.log("lastDigit_modulus", lastDigit_modulus);
    number = Math.floor(number / 10);
    console.log("number", number);
    sumOfDigit = sumOfDigit + lastDigit_modulus;
  }
  return sumOfDigit;
}
console.log(SumofDigitsWithoutConvertToString(1234));

// How loop works in this case

/*
    lastDigit_modulus 4
    number 123
    lastDigit_modulus 3
    number 12
    lastDigit_modulus 2
    number 1
    lastDigit_modulus 1
    number 0
    10
*/
