/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  nums = nums.sort();
  for (let i = 1; i < nums.length; i++) {
    const first = nums[i - 1];
    const second = nums[i];
    if (first === second) {
      return true;
    }
  }

  return false;
}

// @lc code=end
