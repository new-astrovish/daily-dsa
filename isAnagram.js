/*
Valid Anagram:
Given two strings s and t, return true if the two strings are anagrams of each other, 
otherwise return false.

An anagram is a string that contains the exact same characters as another string, 
but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters.
*/

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let sObj = {};
        let tObj = {};

        for (let i = 0; i < s.length; i++) {
            sObj[s[i]] = (sObj[s[i]] || 0) + 1;
            tObj[t[i]] = (tObj[t[i]] || 0) + 1;
        }

        for (let key in sObj) {
            if (sObj[key] !== tObj[key]) {
                return false;
            }
        }
        return true;
    }
}

const s = "racecar", t = "carrace";

const solObj = new Solution();
console.log(solObj.isAnagram(s, t));
