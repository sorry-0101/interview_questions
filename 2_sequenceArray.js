isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]);

// solution one 
function isValidSubsequence(array, sequence) {
  let arr=0,seq=0;
        while(arr< array.length && seq< sequence.length){
        if(array[arr]==sequence[seq]){
        seq = seq+1;
        console.log("sequence count",seq);
        console.log(seq == sequence.length)
      }else{
        arr = arr+1
        console.log("array count",arr);
        console.log(seq == sequence.length)

      }
    }
  return seq == sequence.length
 
}

// another solution

// function isValidSubsequence(array, sequence) {

//   let idx = 0;
//   for(let i = 0; i < array.length; i++) {
//       if (array[i] === sequence[idx]) {
//     idx++;
//     }
//   }
//   console.log(idx === sequence.length)
//   return idx === sequence.length;

  // for(let i = 0; i<=array.length-1; i++){
  //   if(sequence[sequence.length-1]===array[i]){
  //     sequence.pop();
  //      console.log("printing every time length ");
  //    } 
  //   } 
  //   console.log(!sequence.length) 

// }

// solution two

// function isValidSubsequence(array, sequence) {

  // let idx = 0;
  
  // for(let i = 0; i<=array.length-1; i++){
  //   if(sequence[sequence.length-1]===array[i]){
  //     sequence.pop();
  //      console.log("printing every time length ");
  //    } 
  //   } 
  //   console.log(!sequence.length) 

// }

// third solution 

// function isValidSubsequence(array, sequence) {
//   let flag= false;
//   for (let i = 0; i < array.length; i++) {
//     const arrayNum=array[i];
//     for (let j = 0; j < sequence.length; j++) {
//       const seqNum = sequence[j];
//       if(seqNum===array){
//         flag = true;
//         break;
//       }     
//     }
//   }
//   return flag;
 
// }

