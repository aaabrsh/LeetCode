/*
 * @lc app=leetcode id=485 lang=typescript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  let longest: number = 0;
  let currentConsecutive: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentConsecutive++;
      longest = Math.max(longest, currentConsecutive);
    } else {
      currentConsecutive = 0;
    }
  }

  return longest;
}
// @lc code=end
