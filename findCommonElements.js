let arr1 = [1, 2, 2, 3, 4, 4, 5];
let arr2 = [10, 9, 8, 7, 4, 4, 3];

let left = 0;
let right = arr2.length - 1;

let count = 0;
while (left < arr1.length && right >= 0) {
  if (arr1[left] === arr2[right]) {
    count++;
    left++;
    right--;
  } else if (arr1[left] < arr2[right]) {
    left++;
  } else {
    right--;
  }
}

console.log(count);
