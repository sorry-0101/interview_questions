console.log(minimumWaitingTime([3, 2, 1, 2, 6]));

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let minimumTime = 0;
  let lastnum = 0;
  for (item of queries) {
    minimumTime += lastnum;
    lastnum += item;
  }
  return minimumTime;
}
