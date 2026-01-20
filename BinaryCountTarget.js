let target = 2;
let input = [1, 2, 2, 2, 2, 5, 6, 8, 10, 11, 13, 13, 13, 45];

// for First target from the input

const searchElement = (arr, el) => {
  let start = 0;
  let end = arr.length - 1;
  let ans = 0;
  let ans2 = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === el) {
      ans = mid;
      end = mid - 1;
    } else if (arr[mid] > el) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  start = 0;
  end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === el) {
      ans2 = mid;
      start = mid + 1;
    } else if (arr[mid] > el) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  
    console.log(ans, arr[ans], ans, ans2);

    return
};

searchElement(input, target);
