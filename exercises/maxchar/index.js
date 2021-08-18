// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const arr = str.split('');
    const strObj = {}
    for(let char of arr) {
        // will add +1 to current number or be 1 if undefined.
        strObj[char] = (strObj[char] +1) || 1
        // if (strObj[char]) works too
    }
    // pull out keys and turn into array, then used reduce
    // to check if strObj[FIRST VAL] is greater than strObj[SECOND VAL]
    return Object.keys(strObj).reduce((a, b) => {
      return strObj[a] > strObj[b] ? a : b;
    })
    // FOR.. IN used for objects
    // for (let char in charMap) {
        // if (charMap[char] > max) {
        //     max= charMap[char];
        //     maxChar = char;
        // }
    // }
}

module.exports = maxChar;
