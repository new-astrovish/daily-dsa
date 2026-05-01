/*
Longest Common Prefix:
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/

function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let lcp = strs[0];

    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(lcp) !== 0) {
            lcp = lcp.slice(0, lcp.length - 1);
            if (lcp === "") return "";
        }
    }

    return lcp;
}


function longestCommonPrefix1May(nums) {
    if (!nums.length || (nums.length && !nums[0])) {
        return "";
    }

    let prefix = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // Iterating it until the index is !== 0, that means the value can be -1
        // or > 0, and > 0 means the comman value is not in the starting (prefix),
        // which ultimately means that the prefix will be empty string. For this
        // case we are returning immediately.
        // While in the following example ["airport", "air", "airfieldy"] the longest 
        // common prefix will be 'air', but in the first iteration the indexOf 
        // value for "airport" in "air" will be -1 and we have to slice it & check.

        while(nums[i].indexOf(prefix) !== 0) {
            if (prefix === "") {
                return "";
            }
            prefix = prefix.slice(0, prefix.length - 1)
        }
    }

    return prefix;
}