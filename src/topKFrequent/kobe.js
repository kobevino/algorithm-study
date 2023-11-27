/**
 * @description 
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * @summary
 * 시간복잡도: O(n log n) - 각 단계의 복잡도 중 가장 큰 값
 * 공간복잡도: O(n) - nums 배열의 요소를 map 객체에 저장
 */
function solution(nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1); // O(n)
  }

  return Array.from(map.entries()) // O(n)
    .sort((a, b) => b[1] - a[1]) // O(n log n)
    .slice(0, k) // O(k)
    .map(item => item[0]); // O(k)
}

module.exports = solution;