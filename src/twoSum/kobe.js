/**
 * @description 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @summary 
 * 시간 복잡도 O(n) : 배열을 한 번 순회하면서 해시맵에 값을 저장하고 조회 -> 선형 시간이 소요
 * 공간 복잡도 O(n) : 해시맵의 크기는 입력 배열의 크기에 비례
 */
function solution(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const extraNum = target - nums[i]
    if (map.has(extraNum)) return [map.get(extraNum), i];
    map.set(nums[i], i);
  }
}

module.exports = solution;