const searchElement = (arr, el) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === el) {
      return true;
    } else if (arr[mid] > el) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
};

let searchMatrix = function (matrix, target) {
  let row;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target) {
      console.log(i);
      row = i;
      break;
    }
  }

  if (row >= 0) {
    return searchElement(matrix[row], target);
  } else return false;
};

// Input: ((matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ]),
//   (target = 13));
// Output: false;
