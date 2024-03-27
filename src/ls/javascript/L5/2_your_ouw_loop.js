function loop(value, fTest, fUdate, fBody) {
  if (!fTest(value)) {
    return;
  } else {
    fBody(value);
    let updatedValue = fUdate(value);
    loop(updatedValue, fTest, fUdate, fBody);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log,
);
