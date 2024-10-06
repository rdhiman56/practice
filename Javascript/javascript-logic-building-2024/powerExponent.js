// number, power
const base = 2;
const exponent = 3;
// 1st way
function PowerExponent(base, exponent) {
    console.log(base ** exponent);
 }
 
 PowerExponent(2, 10);

 // 2nd way
 function PowerExponent2(base, exponent) {
    let result = 1
    for(let i=1;i<= exponent; i++ ){
        result = result * base
    }
   return result
 }
 
 console.log('result=>', PowerExponent2(2, 3));
