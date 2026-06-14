let given = "aabbccddfr";

let map = {};

for (let i = 0; i < given.length; i++) {
  if (map[given[i]]) {
    map[given[i]] = map[given[i]] + 1;
  } else {
    map[given[i]] = 1;
  }
}

let keys = Object.keys(map);
let oddCount = 0;

for (let i = 0; i < keys.length; i++) {
  if (map[keys[i]] % 2 !== 0) oddCount++;
  if (oddCount > 1) {
    console.log(false);
    return;
  }
}

console.log(true);
