// logic is to consider the low 2 and high less than the n
// and apply the binary search approach on 2 to high and check
//  if mid*mid equals n

let isPerfectSquare = function (n) {
  if (n === 1) {
    return true;
  }

  let low = 2;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid * mid === n) {
      return true;
    } else if (mid * mid < n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
};

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
console.log(isPerfectSquare(1)); // true
