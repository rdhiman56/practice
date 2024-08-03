function smallestNumber(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof b === "number") {
    if (a < b && a < c) {
      return `${a} is smallest number among the others`;
    } else if (b < a && b < c) {
      return `${b} is smallest among the other numbers`;
    } else if (c < a && c < b) {
      return `${c} is smallest among the other numbers`;
    }
  } else {
    return "Strings not allowed!!";
  }
  return a;
}

console.log(smallestNumber(1, 1, 1));

//second way switch

function categorizedNumbers(a, b, c) {
  if (a < b) {
    if (a < c) {
      return 1;
    } else {
      return 3;
    }
  } else {
    if (b < c) {
      return 2;
    }
  }
}

function smallestNumber2(a, b, c) {
  const smallestIndex = categorizedNumbers(a, b, c);
  switch (smallestIndex) {
    case 1:
      return `${a} is smallest!!!`;
    case 2:
      return `${b} is smallest`;
    case 3:
      return `${c} is smallest!!!`;
    default:
      return "Something went wrong!!";
  }
}

console.log(smallestNumber2(20, 5, 34));

// 3rd way smallest Number Assume the smallest number

function smallestNumber3(a, b, c) {
  let smallestNumber = a;
  if (b < smallestNumber) {
    smallestNumber = b;
  }
  if (c < smallestNumber) {
    smallestNumber = c;
  }
  return smallestNumber;
}

console.log(smallestNumber3(4, 90, 3));

// 4th way smallest Number using Array sorting
function SmallestNumberArraySorting4(a, b, c) {
  let d = [a, b, c];
  d.sort();
  console.log("Smallest number", d[0]);
}
SmallestNumberArraySorting4(2, 5, 1);

// 5th way findSmallestNumber sorting

function findSmallestNumberSort5(nums) {
  if (nums.length === 0) return "Array is Empty!!";

  nums.sort((a, b) => a - b);
  return nums[0];
}

console.log(findSmallestNumberSort5([23, 89, 1, 10, 77]));

// 6th way findSmallestNumber without sorting forEach

function findSmallestNumber6(numbers) {
  if (numbers.length === 0) return "Array is Empty!!";
  let smallestNum = numbers[0];

  numbers.forEach((element) => {
    if (element < smallestNum) {
      smallestNum = element;
    }
  });

  return smallestNum;
}
console.log(findSmallestNumber6([3, 6, 1, 78, 11, 80, 22]));

// 7th way smallestnumber using Ternary operator using reduce
function findSmallestNumberUsingTernaryOperator7(numbers) {
  if (numbers.length === 0) return "Empty Array";

  return numbers.reduce((smallest, current) =>
    current < smallest ? current : smallest
  );
}

console.log(
  "Smallest Reduce value:",
  findSmallestNumberUsingTernaryOperator7([3, 7, 9])
);
