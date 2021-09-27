/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    let bigCounter = 0
    for(let e of grid) {
        let counter = 0
        for(let i = e.length-1; i>=0; i--) {
            if(e[i] < 0) {
                counter ++;
            }
        }
        bigCounter+=counter
    }
    return bigCounter
    
};



// BINARY SEARCH SOLUTION
var countNegatives = function(grid) {
    let bigCounter = 0
    for(let e of grid) {
        console.log(binarySearch(e))
        const index = e.length - binarySearch(e)
        bigCounter +=index
    }
    return bigCounter
    
};

var binarySearch = function(arr) {
    let left = 0;
    let right = arr.length-1;
    
    while(left<=right) {
        let mid= Math.floor((left+right)/2)
        
        if(arr[mid]<0) {
            right=mid-1
        } else {
            left=mid+1
        }
    }
    
    
    return left
}