let given = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 12]]], 12];

let depth = 1;

function findDepth(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      depth++;
      findDepth(arr[i]);
    }
  }
}

findDepth(given);

function printSteps(arr) {
  let res = [];
  let i;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      res = [...res, ...arr[i]];
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

let final = given;
for (let i = 0; i < depth; i++) {
  final = printSteps(final);
}

console.log(final);
