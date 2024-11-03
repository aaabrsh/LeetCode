/*
 * @lc app=leetcode id=766 lang=typescript
 *
 * [766] Toeplitz Matrix
 */

// @lc code=start
function isToeplitzMatrix(matrix: number[][]): boolean {
  const checkDiagonal = (matrix: number[][], i: number, j: number): boolean => {
    let num = matrix[i][j];

    while (matrix[i] !== undefined && matrix[i][j] !== undefined) {
      if (matrix[i][j] !== num) return false;

      i++;
      j++;
    }

    return true;
  };

  // go like [0][0], [0][1], [0][2], [0][3]
  for (let c = 0; c < matrix[0].length; c++) {
    if (!checkDiagonal(matrix, 0, c)) return false;
  }

  // go like [1][0], [2][0], [3][0]
  for (let r = 1; r < matrix.length; r++) {
    if (!checkDiagonal(matrix, r, 0)) return false;
  }

  return true;
}
// @lc code=end
