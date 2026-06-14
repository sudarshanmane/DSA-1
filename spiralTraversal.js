let given = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let top = 0; // 0
let right = given[0].length - 1; //
bottom = given.length - 1; //
left = 0; //

for (let i = top; i <= bottom; i++) {
  console.log(given[i][left]);
}

left++;

for (let i = left; i <= right; i++) {
  console.log(given[bottom][i]);
}

bottom--;

for (let i = bottom; i >= top; i--) {
  console.log(given[right][i]);
}

right--;

for (let i = right; i >= left; i--) {
  console.log(given[top][i]);
}
