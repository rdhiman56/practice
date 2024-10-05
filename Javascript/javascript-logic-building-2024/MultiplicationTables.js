//How to Generate Multiplication Tables in JavaScript for given number up to specific range
// Default dark modern

function PrintMultiplicationTable(tableOf, tabletill){
    for(let i=1; i<= tabletill; i++){
        console.log(`${tableOf} * ${i} = ${tableOf*i}`);  
    }
}
PrintMultiplicationTable(2, 10)

// Target variable
// number * number
// Range 
// Side Cases: negative value not allowed, float etc


function MultiplicationTable(x) {
    if(x && x >=1){
    for(let i=1; i <=10; i++){
        console.log('table', x, '*', i, '=', x*i);      
    }
  }else {
    console.log('Error')
  }
}

MultiplicationTable(-1300);
