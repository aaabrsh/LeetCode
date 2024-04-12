/*
 * @lc app=leetcode id=747 lang=typescript
 *
 * [747] Largest Number At Least Twice of Others
 */

// @lc code=start
function dominantIndex(nums: number[]): number {
  if (nums.length < 2) return -1;

  let copy = [...nums].sort((a, b) => a - b);
  const len = nums.length;

  return copy[len - 2] * 2 <= copy[len - 1] ? nums.indexOf(copy[len - 1]) : -1;
}
// @lc code=end
