// Given an array of +ve and -ve integers,
// find a pair whose sum is closest to Zero in Array. 
// Example: [-2, 2, 5, 9, -3, 6] Answer: [2, -3]

// Brute force
function sumClosestToZeroBrute(nums) {
    const len = nums.length;
    let sum = 0;
    let lowestSum = Math.abs(nums[0] + nums[1]);
    let output = [nums[0], nums[1]];

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            sum = Math.abs(nums[i] + nums[j]);
            if (sum < lowestSum) {
                lowestSum = sum;
                output = [nums[i], nums[j]];
            }
        }
    }

    return output;
}

console.log(sumClosestToZeroBrute([-2, 2, 5, 9, -3, 6]));


// Best solution: Two pointer
function sumClosestToZero(nums) {
    nums.sort((a, b) => a - b);

    let closest = Infinity;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        
    }
}

console.log(sumClosestToZeroBrute([-2, 2, 5, 9, -3, 6]));
