const nestedArray = [12, 4, [23, 5,[3,6,[7]]], 4,4];
// output : [12,4, 23,5,4,4]
// Explanation : 
// Recursive approch we have to use when it see Array is there otherwise we can push data to result
function flattenArray(arr) {
    let result = [];

    for(let i =0; i < arr.length; i++ ){
        if(Array.isArray(arr[i])){
            console.log('flattenArray(arr[i])', flattenArray(arr[i]));
            const newArray = flattenArray(arr[i]);
            result = result.concat(newArray);
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}

console.log('nestedArray', nestedArray);
console.log('Flaten nestedArray', flattenArray(nestedArray));