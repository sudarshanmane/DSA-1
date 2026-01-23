let given = [4, 1, 9, 3, 5];

let target = 5;

let index = given.indexOf(5);
[given[index], given[given.length - 1]] = [
  given[given.length - 1],
  given[index],
];

console.log(given);

let low = 0;
let high = 0;

while (high < given.length) {
  if (given[high] < target) {
    [given[high], given[low]] = [given[low], given[high]];
    low++;
  }
  high++;
}

console.log("low------", low, given);

// let given = [4, 1, 9,5,3];
// 1. [4,1,9,3,5]

// low = 0;
// high = 0;
// is high less than target => 4, 1
// swap low and high

// [ 4, 1, 9, 3, 5 ]
// low = 1
// high = 1
// is high less than target => 4, 4
// swap

// [ 4, 1, 9, 3, 5 ]
// low = 2
// high = 2
// is high less than target => 9, 9
// no change

// low = 2
// high = 3
// is high less than target => low = 9, high = 3 true
// swap
// [4, 1, 3, 9, 5];
// low++;
// high++;

// low = 3;
// high = 4;
// [4, 1, 3, 9, 5]
// is high less than target => low = 9, high = 3 true
// swap

// i = 4
// h = 5
// [4, 1, 3, 5, 9];

// finally swpa the low and high
[4, 1, 3, 5, 9];
