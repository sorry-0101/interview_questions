function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let j=i;
     while( j>0 && array[j]<array[j-1]){
        // [array[j],array[j-1]]=[array[j-1],array[j]]
       swap(j, array);
       j-=1;
     }
      console.log(array);
   }
 }
 function swap(j, array){
   [array[j],array[j-1]]=[array[j-1],array[j]]
 }
 
 insertionSort([8, 5, 2, 9, 5, 6, 3]);

 
//  second method
function insertionSort(array) {
    for(let i = 0; i<array.length; i++){
      for(j = i; j>=0; j--){
        if(array[j]>array[j+1]){
          const temp = array[j+1];
          array[j+1]=array[j];
          array[j]=temp;
        }
      }
    }
    return array;
  }
  
  // Do not edit the line below.
  exports.insertionSort = insertionSort;