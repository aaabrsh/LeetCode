/*
 * @lc app=leetcode id=674 lang=typescript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
  let longest = 1;
  let cur = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) cur++;
    else {
      longest = longest > cur ? longest : cur;
      cur = 1;
    }
  }

  return longest > cur ? longest : cur;
}
// @lc code=end
