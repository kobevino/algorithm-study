/**
 * @description 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * @param {string[]} strs
 * @return {string[][]}
 * @summary 
 * n은 입력 배열 strs 길이, k는 배열 내 문자열 중 가장 긴 문자열
 * 시간 복잡도: O(n * k log k) 문자열을 정렬하는데 k log k 시간을 소모
 * 공간 복잡도: O(n * k) 
 */
function solution(strs) {
  const map = new Map();
  for (const str of strs) {
    const newStr = str.split('').sort().join('');
    if (map.has(newStr)) map.set(newStr, [...map.get(newStr), str]);
    else map.set(newStr, [str]);
  }
  return [...map.values()];
}

module.exports = solution;