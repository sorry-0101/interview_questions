
console.log(firstNonRepeatingCharacter("faadabcbbebdf"));
// First Method
// function firstNonRepeatingCharacter(string) {
//   for (let i = 0; i < string.length; i++) {
//     let letter1 = string.charAt(i);
//     let duplicate = false
//     for (let j = 0; j < string.length; j++) {
//       let letter2 = string.charAt(j);
//       if (letter2 === letter1 && i !== j) {
//         duplicate = true;
//       }
//     }
//     if(!duplicate) return i;
//   }
//   return -1; // if no repating character in the string
// }

// second method Method

function firstNonRepeatingCharacter(string){
    let index = {};
    for (const item of string) {
        if(!(item in index)){
            index[item]=0;
        }
        index[item]++
    }
    for(let i = 0; i<string.length; i++){
        if(index[string[i]]===1)
        return i;
    }
    return -1;
}

