// console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]));
console.log(nonConstructibleChange([ 5]));

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let alreadyCreatedChange = 0;
  for (let itm of coins) {
    let createdChange = alreadyCreatedChange + 1;
    if (createdChange < itm) {
      return createdChange;
    }
    alreadyCreatedChange += itm;
  }
  return alreadyCreatedChange + 1;
}
