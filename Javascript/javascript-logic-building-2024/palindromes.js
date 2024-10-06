// Check palindromes string

// 3rd way reverse string and match

function palindromes3(inputString){
    inputString = inputString.toLowerCase();
    const reverseString = inputString.split('').reverse().join('');
    if(reverseString === inputString){
        return true
    }else{
        return false
    }
}
 console.log('palindromes3=>', palindromes3("madam"));
// 2nd way
function palindromes2(inputString) {
    let start = 0;
    let end = inputString.length-1;
    for (start, end; start < end, start++, end--;) {
      if (inputString[start] !== inputString[end]) {
        return false
      } 
    }
    return true;
  }
  
  console.log('palindromes2=>', palindromes2("madam"));


// 1st way
function palindromes(inputString) {
  for (let i = 0; i <= inputString.length /2 ; i++) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      return false
    } 
  }
  return true;
}

console.log('',palindromes("madssfdam"));
