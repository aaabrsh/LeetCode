/*
 * @lc app=leetcode id=414 lang=typescript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
function thirdMax(nums: number[]): number {
  nums = nums.sort((a, b) => b - a);

  const distinct: number[] = [];
  nums.forEach((num) => {
    if (distinct[distinct.length - 1] != num) distinct.push(num);
  });

  return distinct[2] ?? distinct[0];
}
// @lc code=end
