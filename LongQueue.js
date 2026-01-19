let input = [1, 2, 3, 1, 2, 3, 1, 2, 123, 12];

let groups = 1;
let currentMax = input[0];

for (let i = 1; i < input.length; i++) {
  if (input[i] < currentMax) {
    groups++;
  }

  currentMax = input[i];
}

console.log("groups-----", groups);
