/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let len = nums.length;
  let pos = 0;
  for (let i = 0; i < len; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  for (let i = pos; i < len; i++) {
    nums.pop();
  }

  return nums.length;
}
// @lc code=end
