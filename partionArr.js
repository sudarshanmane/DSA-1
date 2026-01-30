let given = [7, 8, 54, 3, 1, 4, 5, 1, 8];

let target = 4;
let pivotIndex = given.indexOf(target);
console.log(pivotIndex);

// Now keep the pivot at the end of the given;

[given[given.length - 1], given[pivotIndex]] = [
  given[pivotIndex],
  given[given.length - 1],
];

let i = 0;
let j = 0;

while (j < given.length - 1) {
  if (given[j] < target) {
    [given[i], given[j]] = [given[j], given[i]];
    i++;
  }
  j++;
}

[given[i], given[j]] = [given[j], given[i]];

console.log(given);
