/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let output: number[] = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (output[0] === -1) output[0] = i;
      output[1] = i;
    } else if (output[0] !== -1) {
      return output;
    }
  }

  return output;
}
// @lc code=end
