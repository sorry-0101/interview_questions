findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])

function findThreeLargestNumbers(array) {
  // array.sort((a,b)=>a-b);
  // console.log(array)
  let number1 = -Infinity;
  let number2 = -Infinity;
  let number3 = -Infinity;
  for (num of array) {
    if(number1<num){
      number3=number2;
      number2=number1;
      number1=num;
    }else if(number2<num){
      number3=number2;
      number2=num
    }else if( number3<num){
      number3=num
    }
  }
  return [number3,number2,number1]
}
