const box = new (class {
  locked = true;
  #content = [];

  unlock() {
    this.locked = false;
  }
  lock() {
    this.locked = true;
  }
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
})();

function withBoxUnlocked(body) {
  let boxStatus = box.locked;
  if (boxStatus) box.unlock();
  try {
    return body();
  } finally {
    if (boxStatus) box.lock();
  }
}

withBoxUnlocked(() => {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}

withBoxUnlocked(() => {
  console.log(box.content);
});

console.log(box.locked);

//extra points
console.log("\n-- extra points --\n");
console.log("Initial status blocked: " + box.locked);
withBoxUnlocked(() => {
  console.log(" - First call of withBoxUnlocked() to unlock the box");
  console.log(" - Status: blocked = " + box.locked);
  withBoxUnlocked(() => {
    console.log(
      " - Second call of withBoxUnlocked() while the box is unlocked",
    );
  });
  console.log(" - Status after second call: blocked = " + box.locked);
  console.log(" - " + box.content);
});

console.log("Final status blocked: " + box.locked);
