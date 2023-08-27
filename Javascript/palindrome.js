// Check palindrome string

console.log(isPalindrome('radar'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('MadaM'));

function isPalindrome(str) {
    let smallStr = str.toLowerCase();
    let start = 0;
    let end = smallStr.length-1;

    while(start < end){
        if(smallStr[start] !== smallStr[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}