let arrangeCoins = function (n) {
  let steps = 0;
  let sum = 1;

  while (n >= 0) {
    n = n - sum;
    if (n >= 0) {
      steps++;
      sum += 1;
    }
  }

  console.log(steps);
};

arrangeCoins(10);
