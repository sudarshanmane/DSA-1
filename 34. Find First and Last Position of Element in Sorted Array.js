let given = [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 13, 45];
let target = 2;

let first = 0;
let second = given.length - 1;

let ans = 0;
while (first <= second) {
  let mid = Math.floor((first + second) / 2);

  if (given[mid] === target) {
    ans = mid;
    second = mid - 1;
  } else if (given[mid] > target) {
    second = mid - 1;
  } else {
    first = mid + 1;
  }
}

first = 0;
second = given.length - 1;

while (first <= second) {
  let mid = Math.floor((first + second) / 2);

  if (given[mid] === target) {
    ans = mid;
    first = mid + 1;
  } else if (given[mid] > target) {
    second = mid - 1;
  } else {
    first = mid + 1;
  }
}

console.log(ans);
