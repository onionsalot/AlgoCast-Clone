/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    // convert s into an array
    // perform .length on arr[.length-1]
    // return count
    
    // const arr = s.trim().split(' ')
    // return arr[arr.length-1].length
    
    // Alternative...
    // first trim the original string of random spaces
    // next create a pointer that points to end of the modified array
    // creates a counter as well to hold the values returned
    // make a while loop where as long as pointer >= 0 it will keep going. = is important as it will fail if single letter passes
    // in the loop, check if modified[pointer] = ' ' and break otherwise move the pointer left, and add to counter
    const modified = s.trim()
    let pointer = modified.length-1
    let counter = 0
    
    while(pointer >= 0) {
        if(modified[pointer] === " ") {
            break 
        } else {
            pointer --;
            counter ++;
        }
    }
    return counter
};