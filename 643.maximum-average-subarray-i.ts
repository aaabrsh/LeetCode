/*
 * @lc app=leetcode id=643 lang=typescript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
function findMaxAverage(nums: number[], k: number): number {
  let max_avg = -Infinity;
  let prev_sum = 0;

  for (let i = 0; i < k; i++) {
    prev_sum += nums[i];
  }

  max_avg = prev_sum / k;

  for (let i = k; i < nums.length; i++) {
    let sum = prev_sum - nums[i - k] + nums[i];
    max_avg = Math.max(max_avg, sum / k);
    prev_sum = sum;
  }

  return max_avg;
}
// @lc code=end
