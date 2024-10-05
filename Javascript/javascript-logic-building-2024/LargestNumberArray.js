function LargestNumberArray(arr) {

    if(!arr || arr.length === 0){
        throw new Error("We need some number in array")
    }

    const CheckStr = arr.every((item) => typeof item === "number")
    if(!CheckStr){
        throw new Error("We need number Not string in array")
    }

    let biggestNum = arr[0];
 for(let i=1; i < arr.length; i++ ){
    if(arr[i] > biggestNum){
        biggestNum = arr[i];
    }
 }
 return biggestNum;
}

// console.log(LargestNumberArray([1,2,56,90,12,102]));
// console.log(LargestNumberArray(null));
console.log(LargestNumberArray([1,2,56,90,12,"102"]));