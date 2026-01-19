// 8. Implement a function that merges two arrays into a single array,
//  alternating elements from each array.

const alternateMerge = (arr1, arr2) => {
  let final = [];

  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    final.push(arr1[index1]);
    final.push(arr2[index2]);

    index1++;
    index2++;
  }

  function addRemaingElement(arr, index) {
    for (let i = index; i < arr.length; i++) {
      final.push(arr[i]);
    }
  }

  if (arr1[index1]) {
    addRemaingElement(arr1, index1);
  } else if (arr2[index2]) {
    addRemaingElement(arr2, index2);
  }

  return final;
};

// console.log(alternateMerge([1, 3, 5], [2, 4, 6]));
// // Output: [1,2,3,4,5,6]

console.log(alternateMerge(["a", "c"], ["b", "d", "e", "f"]));
// // Output: ["a","b","c","d","e","f"]e