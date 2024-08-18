function factorialNumber(num) {
  if (num < 0) {
    throw new Error("Number is Less then 0");
  }
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res = res * i;
  }
  return res;
}

console.log(factorialNumber(3));

// Recurssion

function CalculatefactorialNumberUsingRecursion(num) {
  if (num < 0) {
    throw new Error("Number is Less then 0");
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * CalculatefactorialNumberUsingRecursion(num - 1);
}

console.log(CalculatefactorialNumberUsingRecursion(5));


// factorial using --i
function factorialNumberDown(num) {
 let res = 1;
 for(let i=num; i > 0; i--){
    res *= i
 }
 return res
}

console.log(factorialNumberDown(5));