// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '')
}

module.exports = reverse;

// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         // For of Syntax
//         // character is each element of the string
//         // replaces reversed string with current character + current reversed const
//         reversed = character + reversed;
//     }

//     return reversed;
// }

// function reverse(str) {
//     const splitString = str.split('');
//     const newArr=[];
//     splitString.forEach((string) => {
//         newArr.unshift(string);
//     })
//     return newArr.join('');
// }

// function reverse(str) {
//     const splitString = str.split('');
//     splitString.reverse();
//     return splitString.join('');
// }