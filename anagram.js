let given = "anagram";
let target = "nagara";

let obj = {};

for (let i = 0; i < given.length; i++) {
  if (obj[given[i]]) {
    obj[given[i]] += 1;
  } else {
    obj[given[i]] = 1;
  }
}

console.log(obj);

for (let i = 0; i < target.length; i++) {
  if (obj[target[i]]) {
    obj[target[i]] -= 1;
  } else {
    console.log(false);
    break;
  }
}

console.log(true);
