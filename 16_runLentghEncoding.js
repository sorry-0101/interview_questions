console.log(runLengthEncoding("AAABBBC"))
function runLengthEncoding(string) {
  const totalCharacterArr=[];
   let currntLength=1;
   for (let i = 1; i < string.length; i++) {
     if(string[i]!==string[i-1] || currntLength===9){
       totalCharacterArr.push(currntLength.toString());
       totalCharacterArr.push(string[i-1]);
       currntLength=0;
     }
       currntLength++;
   }
     totalCharacterArr.push(currntLength.toString());
     totalCharacterArr.push(string[string.length-1]);
   return totalCharacterArr.join('')
 }
 