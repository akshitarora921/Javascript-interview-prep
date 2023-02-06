// 1470. Shuffle the Array
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let ans=[]
    for(let i=0;i<n;i++){
        ans.push(nums[i])
        ans.push(nums[n+i])
    }
    return ans
};


let nums=[2,5,1,3,4,7]
n=3
console.log(shuffle(nums,n))