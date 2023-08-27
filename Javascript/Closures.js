// closures is a function with refrencing envirnoment.

function makeCounter(){
    let count = 0;
    function counter() {
        count = count + 1;
        return count;
    }
    return counter;
}

let doCounting = makeCounter();

console.log(doCounting());
console.log(doCounting());
console.log(doCounting());
console.log(doCounting());

