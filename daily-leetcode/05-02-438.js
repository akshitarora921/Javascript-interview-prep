// 438. Find All Anagrams in a Strin
// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */


const createMap = (str) => {
    const p_map = {}
    for (var i = 0; i < str.length; i++) {
        if (Object.keys(p_map).includes(str[i])) {
            p_map[str[i]] += 1
        } else {
            p_map[str[i]] = 1
        }
    }
    return p_map
}
const isAnagram = (a, b) => {

    let flag = true
    Object.keys(b).forEach(keyb => {
        if (b[keyb] !== a[keyb]) {
            flag = false
            return false
        }

    })
    return flag
}


var findAnagrams = function (s, p) {
    const p_map = createMap(p)
    let ans = []
    let j = 0
    let pLen=p.length
    while (j <= s.length -pLen) {
        if (isAnagram(createMap(s.substring(j, j +pLen)), p_map)) {
            ans = [...ans, j]
            while (j <= s.length -pLen && s[j] === s[j +pLen]) {
                console.log(j, j +pLen)
                ans = [...ans, j+1]
                j += 1;
            }

            j += 1;
        }
        j += 1;
    }
    return ans
};

let a = "ababc"
let b = "ab"

console.log("Ans", findAnagrams(a, b))