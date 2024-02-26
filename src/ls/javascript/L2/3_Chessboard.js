let boardWidth = 8;
let cell = "";
let board = "";
let firstCell = "";

for (let x = 1; x <= boardWidth; x++) {
  firstCell = firstCell === "#" ? " " : "#";
  cell = firstCell;

  for (let y = 1; y <= boardWidth; y++) {
    cell = cell === " " ? "#" : " ";
    board = board + cell + (y % boardWidth == 0 ? "\n" : "");
  }
}
console.log(board);
