// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

module.exports = capitalize;

// function capitalize(str) {
//     const strArr= str.split(' ');

//     for(let i=0; i<strArr.length; i++) {
//         // splice will replace the array at element i with contents of the concat between i-th element of strArr first letter uppercased + all the other letters lowercased.
//         strArr.splice(i, 1, strArr[i].slice(0,1).toUpperCase() + strArr[i].slice(1))
//     }
//     return strArr.join(' ')
// }
