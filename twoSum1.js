let given = [1, 2, 3, 2, 1, 4, 3, 5];

let target = 9;
let map = {};

let obj = {};

// for (let i = 0; i < given.length; i++) {
//   let needed = target - given[i];

//   if (map[needed]) {
//     console.log(map[needed], i);
//   }

//   map[given[i]] = i;
// }

// 1 -> needed = 8
// map[neededed] na

// 2 -> needed = 2
// map[needed] = 7; does not exists

// 3 -> needed = 6 na

// 4 -> needed = 7 exists

// let map = {};

// store the map[needed] in to the map with it's index as value
// then check if the needed = target - give[i]
// if (map[needed]) then console.log(true
// map[needed] = i

for (let i = 0; i < given.length; i++) {
  let needed = target - given[i];

  if (map[needed]) {
    console.log(map[needed], i);
    break;
  }

  map[given[i]] = i;
}
