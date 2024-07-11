function sortedSquaredArray(array) {
   let squaredArray = [];
  for (const item of array) {
    squaredArray.push(item * item);
  }
  console.log(squaredArray.sort((a, b) => a - b));
}

sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]);
