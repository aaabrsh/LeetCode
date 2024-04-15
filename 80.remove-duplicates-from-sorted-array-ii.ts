/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start

function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  // the first 2 elements are considered unique
  let writeIndex = 2;

  for (let i = 2; i < nums.length; i++) {
    // check each number at i against the number at writeIndex - 2, if different that means we have a unique number
    if (nums[i] !== nums[writeIndex - 2]) {
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
  }

  return writeIndex;
}
// @lc code=end
