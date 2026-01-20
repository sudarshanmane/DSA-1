let merge = function (nums1, m, nums2, n) {
  let res = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < m && index2 < n) {
    if (nums1[index1] <= nums2[index2]) {
      res.push(nums1[index1]);
      index1++;
    } else {
      res.push(nums2[index2]);
      index2++;
    }
  }

  while (index1 < m) {
    res.push(nums1[index1]);
    index1++;
  }

  while (index2 < n) {
    res.push(nums2[index2]);
    index2++;
  }

  return res;
};

const listSplicer = (arr, start, end) => {
  if (start >= end) {
    return [arr[start]];
  }

  let mid = Math.floor((start + end) / 2);

  const left = listSplicer(arr, start, mid);
  const right = listSplicer(arr, mid + 1, end);

  console.log(left, right);
  return merge(left, left.length, right, right.length);
};

const res = listSplicer([4, 1, 3, 1, 51, 5], 0, 5);
console.log("res-----", res);
