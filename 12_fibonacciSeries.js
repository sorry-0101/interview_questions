// console.log(getNthFib(9));
// function getNthFib(n) {
//   if(n<=1){
//     return 0
//   }
//   if(n ===2){
//     return 1
//   }
//   return getNthFib(n-2) + getNthFib(n-1)
// }

console.log(getNthFib(4));
function getNthFib(n) {
  let num1 = 0, num2=1;
  let count=3;
  while(count <= n){
    const nextNum = num1+num2;
    num1=num2;
    num2=nextNum;
    count++;
  }
  return n > 1 ? num2 : num1;
  // Write your code here.
}


