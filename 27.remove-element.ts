/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let len = nums.length;
  let pos = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
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
