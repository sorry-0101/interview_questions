        
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let bracketStack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            bracketStack.push(')');
        } else if (s[i] == '{') {
            bracketStack.push('}');
        } else if (s[i] == '[') {
            bracketStack.push(']');
        }
        else if (bracketStack.pop() !== s[i]) {
            return false
        }
    }
    return !bracketStack.length;
};

console.log(isValid('(){}[]'));