let given = [1, 2, 3, 12, 5, 6, 7];
let arr = [];
let k = 3;

let sum = [];

for (let i = 0; i < k; i++) {
  sum.push(given[i]);
}

let findSum = (arr) => {
  return arr.reduce((el, acc) => el + acc, 0);
};

let sum1 = findSum(sum);
for (let i = k; i < given.length; i++) {
  sum.shift();
  sum.push(given[i]);
  let sum2 = findSum(sum);
  if (sum2 > sum1) {
    sum1 = sum2;
  }
}

console.log("sum----", sum1);
