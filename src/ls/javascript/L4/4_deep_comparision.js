function deepEqual(a, b) {
  if (typeof a != "object" || typeof b != "object") return false;

  if (a === null || b === null) return false;

  if (a === b) return true;

  if (Object.keys(a).length != Object.keys(b).length) return false;

  for (let key in a) {
    if (typeof a[key] === "object" && typeof b[key] === "object") {
      if (deepEqual(a[key], b[key]) === false) return false;
    } else {
      if (!(a[key] === b[key])) return false;
    }
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, { here: 1, object: 2 }));

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
