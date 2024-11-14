/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const matrix: number[][] = new Array(m).fill([]).map((_) => []);

  // fill the first column with 1s
  for (let i = 0; i < m; i++) {
    matrix[i][0] = 1;
  }

  // fill the first row with 1s
  for (let i = 0; i < n; i++) {
    matrix[0][i] = 1;
  }

  // for every cell, its value is going to be the sum of the cells to the top and left of it
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++)
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
  }

  // return the value at the bottom-right of the matrix
  return matrix[m - 1][n - 1];
}
// @lc code=end
