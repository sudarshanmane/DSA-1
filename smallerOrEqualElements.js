function smallerOrEqualElements(A, B) {
  first = 0;
  second = A.length - 1;
  let res;
  while (first <= second) {
    let mid = Math.floor((first + second) / 2);
    console.log(mid);
    if (A[mid] === B) {
      res = mid;
      first = mid + 1;
    } else if (A[mid] > B) {
      second = mid - 1;
    } else {
      res = mid;
      break;
    }
  }

  res = res + 1;

  if (res) {
    return res;
  } else {
    return 0;
  }
}

let count = smallerOrEqualElements([1, 3, 4, 4, 6], 3);

console.log("count-------", count);
