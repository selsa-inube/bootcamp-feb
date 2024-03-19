function reverseArray(array) {
  let newArray = [];
  let y = array.length - 1;

  for (let i = 0; i < array.length; i++) newArray.push(array[y--]);

  return newArray;
}

function reverseArrayInPlace(array) {
  let tempArray = [...array];
  let y = array.length - 1;

  for (let i = 0; i < array.length; i++) array[i] = tempArray[y--];

  return array;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
