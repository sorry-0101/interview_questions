var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
            if (ans === '') {
                return '';
            }
        }
    }
    return ans;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));



/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix == "") return ""
        }
    }
    return prefix
};