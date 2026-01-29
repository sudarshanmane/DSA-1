let input = [1, 2, 3, 5];
let target = 5;
let low = 0;
let high = input.length - 1;
let ans = input.length - 1;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);

  if (input[mid] === target) {
    ans = mid;
    low = mid + 1;
  } else if (input[mid] > target) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}

console.log(ans);
