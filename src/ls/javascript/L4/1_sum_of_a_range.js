function range(start, end, step = 1) {
  let numbers = [];

  if (step > 0) {
    for (let x = start; x <= end; x += step) numbers.push(x);
  } else if (step < 0) {
    for (let x = start; x >= end; x += step) numbers.push(x);
  } else {
    //step === 0
    numbers.push("error");
  }
  return numbers;
}

function sum(numbers) {
  let total = 0;
  for (let x = 0; x < numbers.length; x++) total += numbers[x];
  return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
