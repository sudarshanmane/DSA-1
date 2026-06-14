var findPeakElement = function (nums) {
  let left = 0;

  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid; //     cause this mid is our ans
    } else {
      left = mid + 1;
    }
  }

  return left;
};

let ginven = [1, 2, 3, 1, 5, 6, 4];

// 1.
// left = 0 
// right = 6 
// mid = 3 -> 1

// check if mid > mid + 1 ----> 1 > 5 
// no

// left  = mid + 1
// right = 6 -> 4
// left = 4 -> 5 
// mid - 5 -> 6

// check if the mid > mid + 1 -> 6 > 4
// true

// left = mid + 1 = 4;
// right = 5 => 6