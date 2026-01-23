let minimumOperations = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] && !map[nums[i]]) {
      map[nums[i]] = 1;
    }
  }

  console.log(map);

  return Object.keys(map).length;
};

minimumOperations([1, 2, 0, 3, 4]);
