function ReverseString(str) {
  // convert number to string
  //str = typeof str === 'number' ? str.toString() : str;

  // only strings are allowed
  if (typeof str !== "string") {
    throw new Error("Number not allowed!!");
  }

  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}
console.log(ReverseString("123"));

// Reverse String Using Array

function ReverseStringUsingArray(str) {
  const splitedInput = str.split("");
  const SplittedArray = splitedInput.reverse();
  const res = SplittedArray.join("");
  return res;
}

console.log(ReverseStringUsingArray("rahul"));
