let given = "anagramac";
let target = "nagaramabc";

let obj = {};

for (let i = 0; i < given.length; i++) {
  if (obj[given[i]]) {
    obj[given[i]] += 1;
  } else {
    obj[given[i]] = 1;
  }
}

for (let i = 0; i < target.length; i++) {
  if (obj[target[i]]) {
    obj[target[i]] -= 1;
    if (obj[target[i]] === 0) {
      delete obj[target[i]];
    }
  } else {
    console.log(false);
    return;
  }
}

if (Object.keys(obj).length) {
  console.log(false);
  return;
}

console.log(true);
