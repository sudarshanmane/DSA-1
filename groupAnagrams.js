let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

let groupAnagrams = function (strs) {
  let res = {};

  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].trim().split("").sort().join("");
    console.log(sorted);
    if (res[sorted]) {
      res[sorted] = [...res[sorted], strs[i]];
    } else {
      res[sorted] = [strs[i]];
    }
  }

  return Object.values(res);
};
