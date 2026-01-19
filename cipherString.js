let input = "aabbccdeffe";

let res = "";
let i = 0;
let j = 1;

let count = 1;

while (j < input.length) {
  if (input[i] != input[j]) {
    res += input[i] + count;
    count = 1;
  } else {
    count++;
  }
  i++;
  j++;
}
res += input[i] + count;

console.log("res-----", res);
