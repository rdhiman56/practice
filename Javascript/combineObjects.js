// combineObjects : Objects inside Array have Multiple Repeated Objects we have to Combine them.
const allFruits = [
  { num: 1, name: "Apple" },
  { num: 1, name: "Mango" },
  { num: 2, name: "Banana" },
  { num: 1, name: "Apple" },
  { num: 1, name: "Banana" },
  { num: 2, name: "Lychee" },
];

/* output
[
    {num:2, name: 'Apple'},
    {num:1, name: 'Mango'},
    {num:3, name: 'Banana'},
    {num:2, name: 'Lychee'},
]
*/

function combineObjects(arr) {
  let resObj = [];
  for (let i = 0; i < arr.length; i++) {
    let newEle = arr[i];
    let currentIndex = resObj.findIndex((item) => item.name === newEle.name);
    if (currentIndex == -1) {
      resObj.push(newEle);
    } else {
      resObj[currentIndex].number += newEle.number;
    }
  }
  return resObj;
}

console.log(combineObjects(allFruits));
