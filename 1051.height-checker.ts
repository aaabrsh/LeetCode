/*
 * @lc app=leetcode id=1051 lang=typescript
 *
 * [1051] Height Checker
 */

// @lc code=start
function heightChecker(heights: number[]): number {
  let sorted: number[] = [...heights].sort((a, b) => a - b);
  let outOfPlace = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) {
      outOfPlace++;
    }
  }

  return outOfPlace;
}
// @lc code=end
