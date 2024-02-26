for (let x = 1; x <= 100; x++) {
  let y = "";
  if (x % 3 === 0) {
    y = "Fizz";
  }
  if (x % 5 === 0) {
    y = y + "Buzz";
  }
  console.log(y || x);
}
