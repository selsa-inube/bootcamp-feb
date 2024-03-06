function every(array, test) {
  let result = true;

  array.forEach((x) => {
    if (!test(x)) result = false;
  });

  return result;
}

console.log(every([1, 3, 5], (n) => n < 10));

console.log(every([2, 4, 16], (n) => n < 10));

console.log(every([], (n) => n < 10));
