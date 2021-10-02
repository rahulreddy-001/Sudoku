const btnEl = document.querySelector("#btn");
const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var arr1 = [
  [9, 0, 0, 2, 0, 0, 6, 0, 0],
  [8, 1, 6, 0, 4, 5, 0, 0, 7],
  [0, 0, 0, 6, 0, 0, 0, 0, 3],
  [7, 0, 1, 0, 8, 2, 5, 6, 0],
  [0, 5, 8, 7, 0, 0, 0, 0, 4],
  [6, 0, 9, 1, 5, 0, 7, 8, 0],
  [0, 0, 0, 9, 2, 0, 0, 5, 8],
  [4, 0, 0, 5, 0, 7, 0, 0, 1],
  [0, 0, 0, 8, 3, 4, 0, 0, 0],
];
var arr2 = [
  [5, 0, 0, 0, 0, 8, 0, 0, 0],
  [0, 0, 4, 1, 0, 3, 6, 5, 9],
  [0, 3, 0, 0, 0, 7, 0, 0, 0],
  [9, 4, 0, 3, 0, 5, 7, 0, 0],
  [0, 0, 8, 2, 0, 4, 5, 0, 0],
  [0, 6, 5, 7, 0, 9, 4, 8, 0],
  [0, 0, 0, 0, 7, 0, 3, 2, 4],
  [1, 0, 0, 0, 5, 0, 0, 0, 6],
  [4, 2, 0, 0, 3, 0, 8, 1, 5],
];
var arr3 = [
  [5, 0, 0, 0, 0, 8, 0, 0, 0],
  [0, 0, 4, 1, 0, 3, 6, 5, 9],
  [0, 3, 0, 0, 0, 7, 0, 0, 0],
  [9, 4, 0, 3, 0, 5, 7, 0, 0],
  [0, 0, 8, 2, 0, 4, 5, 0, 0],
  [0, 6, 5, 7, 0, 9, 4, 8, 0],
  [0, 0, 0, 0, 7, 0, 3, 2, 4],
  [1, 0, 0, 0, 5, 0, 0, 0, 6],
  [4, 2, 0, 0, 3, 0, 8, 1, 5],
];
var arr4 = [
  [9, 0, 0, 2, 0, 0, 6, 0, 0],
  [8, 1, 6, 0, 4, 5, 0, 0, 7],
  [0, 0, 0, 6, 0, 0, 0, 0, 3],
  [7, 0, 1, 0, 8, 2, 5, 6, 0],
  [0, 5, 8, 7, 0, 0, 0, 0, 4],
  [6, 0, 9, 1, 5, 0, 7, 8, 0],
  [0, 0, 0, 9, 2, 0, 0, 5, 8],
  [4, 0, 0, 5, 0, 7, 0, 0, 1],
  [0, 0, 0, 8, 3, 4, 0, 0, 0],
];
var arr5 = [
  [5, 0, 0, 0, 0, 8, 0, 0, 0],
  [0, 0, 4, 1, 0, 3, 6, 5, 9],
  [0, 3, 0, 0, 0, 7, 0, 0, 0],
  [9, 4, 0, 3, 0, 5, 7, 0, 0],
  [0, 0, 8, 2, 0, 4, 5, 0, 0],
  [0, 6, 5, 7, 0, 9, 4, 8, 0],
  [0, 0, 0, 0, 7, 0, 3, 2, 4],
  [1, 0, 0, 0, 5, 0, 0, 0, 6],
  [4, 2, 0, 0, 3, 0, 8, 1, 5],
];
const Easy = [arr1, arr2, arr3, arr4, arr5];
var arr = Easy[Math.floor(Math.random() * Easy.length)];
console.log(Math.floor(Math.random() * Easy.length));

function getId(row, column) {
  const id = "#_" + row.toString() + column.toString();
  return id;
}
for (i = 0; i < 9; i++)
  for (j = 0; j < 9; j++)
    if (arr[i][j] != 0 && arr[i][j] in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      document.querySelector(getId(i, j)).value = arr[i][j];
      document.querySelector(getId(i, j)).disabled = true;
    }
const Output = () => {
  for (i = 0; i < 9; i++)
    for (j = 0; j < 9; j++)
      if (arr[i][j] === 0) {
        arr[i][j] = parseInt(document.querySelector(getId(i, j)).value);
        document.querySelector(getId(i, j)).disabled = true;
      }
  var flag = 0;
  for (i = 0; i < 9; i++)
    for (j = 0; j < 9; j++) if (verifyElement(i, j)) flag++;
  if (flag === 81) res = "Answer is CORRECT !";
  else res = "Answer is WRONG Better luck Next time";
  var temp = `<div class="btn shadow-1 primary rounded-tr0 rounded-bl0 rounded-tl3 rounded-br3">${res}
</div>`;
  document.querySelector("#output").innerHTML = temp;
};
function verifyElement(row, column) {
  const val = arr[row][column];
  var count = 0,
    x,
    y;
  const a = [0, 1, 2],
    b = [3, 4, 5],
    c = [6, 7, 8];

  x = row in a ? a : b;
  x = row in x ? x : c;
  y = column in a ? a : b;
  y = column in y ? y : c;
  for (var i = 0; i < 9; i++) if (arr[i][column] === val) count++;
  for (var j = 0; j < 9; j++) if (arr[row][j] === val) count++;
  for (i = x[0]; i <= x[2]; i++)
    for (j = y[0]; j <= y[2]; j++) if (arr[i][j] === val) count++;
  if (count === 3) return true;
  else false;
}
btnEl.addEventListener("click", Output, "false");
