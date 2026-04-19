/*
Contains Duplicate
Given an integer array nums, return true if any value appears more than once in the array,
otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false
*/


class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unique = new Set(nums);
        const newLen = [...unique].length;

        if (nums.length !== newLen) {
            return true;
        }
        return false;
    }
}


const nums = [1, 2, 3, 3];

const solObj = new Solution();
console.log(solObj.hasDuplicate(nums));
