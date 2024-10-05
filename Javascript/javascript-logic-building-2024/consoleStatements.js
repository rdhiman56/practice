// 4: Output output


// 3: destructuring array output
const number = [1,2,3,4];
const [x,y] = number;
console.log('X res', x, y); // X res 1
//destructuring pattern [x] will assign the first element of the array (1) to x.

// 2: Output 2 Arrays
let firstArr = [1,2,3,4,5];
let secondArr = [4,5,6,7,8];
let FinalRes = [...firstArr, ...secondArr];
console.log('FinalRes', FinalRes);

// 1:
var user = null;
console.log(typeof user); // Object

/* typeof null returns "object" because of a historical quirk in 
JavaScript's design, and it has been retained for backward compatibility. 
Despite this, null is not an object in the usual sense, 
but a primitive value that signifies "no value" or "empty object reference." */