/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let l = 0;
  let r = matrix.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const midMatrix = matrix[m];

    if (midMatrix[0] <= target && midMatrix[midMatrix.length - 1] >= target) {
      // binary search on the mid array
      let l2 = 0;
      let r2 = midMatrix.length - 1;
      while (l2 <= r2) {
        const m2 = Math.floor((l2 + r2) / 2);

        if (midMatrix[m2] > target) {
          r2 = m2 - 1;
        } else if (midMatrix[m2] < target) {
          l2 = m2 + 1;
        } else {
          return true;
        }
      }
      return false;
    } else if (midMatrix[0] > target) {
      // go left
      r = m - 1;
    } else {
      // go right
      l = m + 1;
    }
  }

  return false;
}
// @lc code=end
