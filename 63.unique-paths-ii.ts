/*
 * @lc app=leetcode id=63 lang=typescript
 *
 * [63] Unique Paths II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  // if the first cell is an obstacle, there is no path
  if (obstacleGrid[0][0] === 1) return 0;

  // fill the first row with 1s
  // if an obstacle is found, the current cell and all subsequent cells are not going to be reachable, therefore set them to zero
  let obstacleFound = false;
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      obstacleFound = true;
    }
    obstacleGrid[0][i] = obstacleFound ? 0 : 1;
  }

  // same as above but for the firs column
  obstacleFound = false;
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      obstacleFound = true;
    }
    obstacleGrid[i][0] = obstacleFound ? 0 : 1;
  }

  // for every cell, its value is going to be the sum of the cells to the top and left of it
  // if a cell contains an obstacle, set it to 0 so that it doesn't affect its adjacent cell
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++)
      if (obstacleGrid[i][j] === 1) obstacleGrid[i][j] = 0;
      else obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
  }

  // return the value at the bottom-right of the matrix
  return obstacleGrid[m - 1][n - 1];
}
// @lc code=end
