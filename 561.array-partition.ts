/*
 * @lc app=leetcode id=561 lang=typescript
 *
 * [561] Array Partition
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < nums.length; i = i + 2) {
    sum += nums[i];
  }

  return sum;
}
// @lc code=end
