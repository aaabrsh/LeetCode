/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      // find the next non zero value and swap
      let j = i + 1;
      while (j < nums.length) {
        if (nums[j] !== 0) {
          break;
        }
        j++;
      }

      if (j >= nums.length) break;

      // swap
      nums[i] = nums[i] + nums[j];
      nums[j] = nums[i] - nums[j];
      nums[i] = nums[i] - nums[j];
    }
    i++;
  }
}

// @lc code=end
