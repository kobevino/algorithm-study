/**
 * @description Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 * @summary 시간복잡도 O(n) / 공간복잡도 O(n) 최악의 경우(중복이 없는 경우) 제외하고 중복 요소 찾는 즉시 반복문 중단. 
 */
function solution(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    else set.add(nums[i]);
  }
  return false;
}

/** 
 * @summary 시간복잡도 O(n) / 공간복잡도 O(n) new Set 내부적으로 배열의 모든 요소를 한번씩 체크.
 */
function solution2(nums) {
  return nums.length !== new Set(nums).size;
}

// 결론적으로 solution함수가 solution2 함수보다 더 효율적인 코드입니다.

module.exports = solution;