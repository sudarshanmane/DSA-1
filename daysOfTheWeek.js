let days = { Mon: 0, Tue: 1, Wed: 2, Thur: 3, Fri: 4, Sat: 5, Sun: 6 };
let give = "Wed";

let actual = Math.floor(8 % 7);
let final = (days[give] + actual) % 7;
console.log(final);

for (let i = 0; i < actual; i++) {
  console.log();
}
