function sockMerchant(n, ar) {
  let result = 0,
    checked = [];
  for (let i = 0; i < n; i++) {
    if (checked.includes(ar[i])) {
      continue;
    }
    const resultPair = ar.filter(value => value == ar[i]);
    let pairOfSock = Math.floor(resultPair.length / 2);
    result += pairOfSock;
    checked.push(ar[i]);
  }
  return result;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
