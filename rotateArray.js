let input = [1, 2, 3, 4, 5];
let res = [];

// 1 -> 5 6 2 3 4
// 2 -> 4 5 1 2 3
// 3 -> 3 4 5 1 2
// 4 -> 2 3 4 5 1
// 5 -> 1 2 3 4 5
let t = 20;
let aR = t % input.length;
if (!aR) {
  console.log(input);
  return input;
}

console.log(aR);
for (let i = input.length - 1; i >= input.length - aR; i--) {
  res.push(input[i]);
}

for (let i = 0; i < input.length - aR; i++) {
  res.push(input[i]);
}

console.log(res);
