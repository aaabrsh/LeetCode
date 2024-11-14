/*
 * @lc app=leetcode id=64 lang=typescript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  /** starting from the bottom right, take the minimum of the
   * right and the bottom value and add it with the current cell value.
   * move back to the start of the grid like this and the value at
   * [0][0] is going to be the shortest path
   */
  let m = grid.length;
  let n = grid[0].length;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let right = grid[i][j + 1] !== undefined ? grid[i][j + 1] : Infinity;
      let down = grid[i + 1] ? grid[i + 1][j] : Infinity;

      if (right !== Infinity && down !== Infinity) {
        grid[i][j] += Math.min(right, down);
      } else if (right !== Infinity) {
        grid[i][j] += right;
      } else if (down !== Infinity) {
        grid[i][j] += down;
      }
    }
  }

  return grid[0][0];
}
// @lc code=end
