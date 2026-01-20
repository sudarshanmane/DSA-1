let given = [1, 2, 3, 2, 1, 4, 3, 5];

let target = 9;
let map = {};

for (let i = 0; i < given.length; i++) {
  let needed = target - given[i];

  if (map[needed]) {
    console.log([map[needed], i]);
    return [map[needed], i];
  }

  map[given[i]] = i;
}
