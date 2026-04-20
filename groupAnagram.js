/*
Group Anagrams:
Given an array of strings strs, group all anagrams together into sublists. 
You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, 
but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.
*/

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = [];

        for (let i = 0; i < strs.length; i++) {
            let anagramArr = [];
            for (let j = i + 1; j < strs.length; j++) {
                if (this.isAnagram(strs[i], strs[j])) {
                    // let str = strs.splice(j, 1)
                    // anagramArr.push(str);
                    anagramArr.push(strs[j]);
                    strs.splice(j, 1);
                    j--;
                }
            }
            anagramArr.push(strs[i])
            output.push(anagramArr);
        }

        return output;
    }

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

const strs = strs = ["act","pots","tops","cat","stop","hat"];

const solObj = new Solution();
console.log(solObj.groupAnagram(strs));
