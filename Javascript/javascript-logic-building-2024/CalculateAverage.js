// Average = (Sum of Observations) ÷ (Total Numbers of Observations)
function calculateAverage(numbers) {
    let Average =0;
    let sum = 0;
    for(let i=0; i< numbers.length; i++){
        sum += numbers[i];
        Average = sum / numbers.length
    }
    return Average;
}

console.log('Average=>', calculateAverage([2,4,6]));