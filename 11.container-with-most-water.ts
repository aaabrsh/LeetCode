/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let largestArea = 0;
  let hightestNum = 0;

  for (let i = 0; i < height.length; i++) {
    const start = height[i];
    hightestNum = start > hightestNum ? start : hightestNum;
    for (let j = height.length - 1; j > i; j--) {
      /**
       * if we find a match in the furthest index,
       * but the area under it is still smaller that the highest
       * we have found so far, there is no need to go further and move
       * the start index one position to the right
       */
      if (hightestNum * (j - 1) < largestArea) break;

      const end = height[j];
      const min = start < end ? start : end;
      const area = min * (j - i);
      largestArea = area > largestArea ? area : largestArea;
    }
  }

  return largestArea;
}
// @lc code=end
