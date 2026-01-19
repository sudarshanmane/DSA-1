let arr1 = [1, 2, 3, 4, 5];

let left = [1];
let right = [];

let k = arr1.length - 1;
right[k] = 1;
let prod1 = 1;
let prod2 = 1;

for (let i = 1; i < arr1.length; i++) {
  left.push(arr1[i - 1] * left[i - 1]);
  k--;

  right[k] = arr1[k + 1] * right[k + 1];
  console.log(arr1[k + 1], right[k + 1]);
}

for (let i = 0; i < arr1.length; i++) {
  console.log(left[i] * right[i]);
}
