/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {
  let min = nums[0];
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    min = Math.min(min, nums[m]);

    if (nums[r] > nums[m]) {
      // go left
      r = m - 1;
    } else {
      // go right
      l = m + 1;
    }
  }

  return min;
}
// @lc code=end
