// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// recurrsive approch

function fibonacci(n){
    if (n == 1 || n == 2) return 1;
    return fibonacci((n-2) + (n-1));
 }
 console.log('fab', fibonacci(3));
 console.log('fabi', fibonacci(8));