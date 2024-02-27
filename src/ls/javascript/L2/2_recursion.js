function isEven(x) {
  if (x === 0) {
    return true;
  } else if (Math.abs(x) === 1) {
    return false;
  } else {
    return isEven(Math.abs(x) - 2);
  }
}

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));

console.log(isEven(-50));
