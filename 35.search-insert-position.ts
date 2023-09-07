/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  if (nums[l] === target) {
    return l;
  } else if (nums[r] === target) {
    return r;
  }

  while (l < r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return nums[l] >= target ? l : l + 1;
}
// @lc code=end
