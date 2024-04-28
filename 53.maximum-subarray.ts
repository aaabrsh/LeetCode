/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let sum = nums[0];
  let temp = 0;

  for (const n of nums) {
    // if the previous sum (temp) is negative, we are not interested, we start the sum from the current index
    if (temp < 0) temp = 0;
    temp += n;
    sum = Math.max(sum, temp);
  }

  return sum;
}
// @lc code=end
