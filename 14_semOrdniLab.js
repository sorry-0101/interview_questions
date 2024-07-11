console.log(semordnilap(["dog", "hello", "desserts", "test", "god", "stressed"]));

function semordnilap(words) {
  let semOrderArr = [];
  let wordSet = new Set();
  for (const item of words) {
    const reversed = item.split("").reverse().join("");
    if ( wordSet.has(reversed)) {
      semOrderArr.push([item, reversed]);
    }else{
      wordSet.add(item)
    }
  }
 return semOrderArr;
}


// second method
function semordnilap(words) {
  const wordSet = new Set(words);
  const semArr=[]
  for (const item of words) {
    const rev = item.split("").reverse().join("");
    if(wordSet.has(rev) && rev !== item){
      semArr.push([item,rev]);
      wordSet.delete(item);
      wordSet.delete(rev);
    }
    
  }
  return semArr ;
}

// function semordnilap(words) {
//   let revArr = [],
//     semOrderArr = [],
//     k = 0;
//   for (let i = 0; i < words.length; i++) {
//     const reverse = words[i].split("").reverse().join("");
//     revArr.push(reverse);
//   }
//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === revArr[k]){
//       semOrderArr.push([words[i], revArr[i]])
//       revArr
//       k++;
//     } 
      
//   }
//   return semOrderArr;
// }