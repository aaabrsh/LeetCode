/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  let n = matrix.length;

  // convert rows to col and cols to rows
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // swap in place
      matrix[i][j] = matrix[i][j] + matrix[j][i];
      matrix[j][i] = matrix[i][j] - matrix[j][i];
      matrix[i][j] = matrix[i][j] - matrix[j][i];
    }
  }

  // reverse each row
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      // swap in place
      matrix[i][j] = matrix[i][n - 1 - j] + matrix[i][j];
      matrix[i][n - 1 - j] = matrix[i][j] - matrix[i][n - 1 - j];
      matrix[i][j] = matrix[i][j] - matrix[i][n - 1 - j];
    }
  }
}
// @lc code=end
