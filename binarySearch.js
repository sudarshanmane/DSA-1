let target = 2;
let input = [1, 2, 2, 2, 2, 5, 6, 8, 10, 11, 13, 13, 13, 45];

let start = 0;
let end = input.length - 1;

let ans;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (input[mid] === target) {
    ans = mid;
    end = mid - 1;
  } else if (input[mid] > target) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(ans);

// const searchElement = (arr, el) => {
//   let start = 0;
//   let end = arr.length - 1;
//   let ans;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === el) {
//       ans = mid;
//       end = mid - 1;
//     } else if (arr[mid] > el) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }

//   console.log(ans, arr[ans]);
// };

// searchElement(input, target);
