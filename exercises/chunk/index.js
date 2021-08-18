// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while(index<array.length) {
        chunked.push(array.slice(index, index +size));
        index=index+size;
    }

    return chunked
}

module.exports = chunk;

// function chunk(array, size) {
//     const newArr=[];
//     // get how many elements array will need by dividing size/array then Math.ceil()
//     const arraySize = Math.ceil(array.length/size);

//     //first loop will loop for length (arraySize), creating a new array with each iteration.
//     for(let i=0; i<arraySize; i++) {
//       const innerArrs = [];
//       // second loop will run for length (size), and remove the first element of array and place that element into innerArrs
//         for (let n=0; n<size; n++) {
//           if (array.length) {
//           innerArrs.push(array.shift())

//           } else {break}
//         }

//         // once size is met, will push to newArr
//       newArr.push(innerArrs)
//     }
//     return newArr;
// }