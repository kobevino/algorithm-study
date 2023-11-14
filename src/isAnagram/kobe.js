/**
 * @description 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @summary 시간 복잡도 O(n) / 공간복잡도 O(1) 
 */
function solution(s, t) {
  const chars = new Array(26).fill(0); // 상수 크기 배열 생성
  
  for (let i = 0; i < s.length; i++) {
    chars[s[i].charCodeAt() - 97] += 1;
    chars[t[i].charCodeAt() - 97] -= 1;
  }

  return !chars.includes(1);
}

module.exports = solution;