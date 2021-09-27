/**
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
 * 
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    // This solution works with contraint of n > 0
    const arr = [0];
    
    for(let i=1; i<n + 1; i++) {
        arr.push(i.toString(2).replace(/0/g, "").length)
    }
    
    return arr
};