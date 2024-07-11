// method one
// function isPalindrome(string) {
//   for (let i = 0; i < string.length / 2; i++) {
//     if (len == 1) {
//       return true;
//     } else if (string[i] !== string[string.length - 1 - i]) {
//       return false;
//       break;
//     }
//   }
//   return true;
// }
// isPalindrome("abcdefghihgfeddcba");

// method Second\

function isPalindrome(string) {
  if (string.length == 1) {
    return true;
  } else {
    let stringArr = string.split("")
     stringArr.reverse();
    const reverseString = stringArr.join("");
    if (string !== reverseString) {
      return false
    }
    return true;
  }
}
isPalindrome("abcdcba");
