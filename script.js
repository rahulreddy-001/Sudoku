const btnEl = document.querySelector("#btn");
const btn_show = document.querySelector("#btn1");
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
function getId(row, column) {
  const id = "#_" + row.toString() + column.toString();
  return id;
}

const display = (arr) => {
  for (i = 0; i < 9; i++)
    for (j = 0; j < 9; j++)
      if (arr[i][j] != 0) {
        document.querySelector(getId(i, j)).value = arr[i][j];
        document.querySelector(getId(i, j)).disabled = true;
      }
};

const create_grid = () => {
  const table = document.querySelector("#grid");
  for (let i = 0; i < 9; i++) {
    let row = document.createElement("tr");
    row.classList.add("row");
    for (let j = 0; j < 9; j++) {
      let cell = document.createElement("td");
      let input = document.createElement("input");
      input.classList.add("cell");
      input.id = getId(i, j).split("#")[1];
      input.type = "text";
      input.maxLength = 1;
      cell.appendChild(input);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  display(arr);
};

function verifyElement(grid, row, col, num) {
  for (let x = 0; x <= 8; x++) if (grid[row][x] == num) return false;
  for (let x = 0; x <= 8; x++) if (grid[x][col] == num) return false;

  let sr = row - (row % 3),
    sc = col - (col % 3);

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) if (grid[i + sr][j + sc] == num) return false;

  return true;
}

const handle_resp = (resp) => {
  if (resp === true) res = "Answer is CORRECT !";
  else res = "Answer is WRONG Better luck Next time";

  var temp = `<div>${res}</div>`;
  document.querySelector("#output").innerHTML = temp;
};

const output = () => {
  var flag = 0;
  for (i = 0; i < 9; i++)
    for (j = 0; j < 9; j++) if (verifyElement(arr, i, j, arr[i][j])) flag++;
  let res = flag === 81 ? true : false;
  handle_resp(res);
};

let N = 9;
function solveSudoku(grid, row, col) {
  if (row === N - 1 && col === N) {
    return true;
  }
  if (col === N) {
    row++;
    col = 0;
  }

  if (grid[row][col] != 0) {
    return solveSudoku(grid, row, col + 1);
  }

  for (let num = 1; num < 10; num++) {
    if (verifyElement(grid, row, col, num)) {
      grid[row][col] = num;
      if (solveSudoku(grid, row, col + 1)) return true;
    }
    grid[row][col] = 0;
  }
  return false;
}

create_grid();

btnEl.addEventListener("click", () => {
  output();
});

btn_show.addEventListener("click", () => {
  solveSudoku(arr, 0, 0);
  console.table(arr);
  display(arr);
});
