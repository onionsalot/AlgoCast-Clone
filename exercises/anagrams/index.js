// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // simple solution using sort to sort string->array->string comparison
    const arrA = stringA.replace(/[^\w]/g, "").toLowerCase().split('');
    const arrB = stringB.replace(/[^\w]/g, "").toLowerCase().split('');

    if (arrA.sort().join('') === arrB.sort().join('')) {
        return true;
    } else {
        return false;
    }
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     // Helper function
//     function buildCharMap(str) {
//         const charObj = {};
//         for(let element of str.replace(/[^\w]/g, "").toLowerCase()) {
//             // For of works for both strings and array. No need to split
//             charObj[element] = charObj[element] + 1 || 1;
//         }
//         return charObj;
//     }
//     const objA = buildCharMap(stringA);
//     const objB = buildCharMap(stringB);

//     if (stringA.replace(/[^\w]/g, "").length !== stringB.replace(/[^\w]/g, "").length) {
//         return false
//     } else {

//       for(element in objA) {
//         if (objA[element] === objB[element]) { continue } else { return false}
//       }
//       return true
//     }
// }