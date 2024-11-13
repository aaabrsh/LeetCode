/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  const res: number[] = [];

  while (bottom >= top && right >= left) {
    // go right
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    // go down
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    // go left
    for (let i = right; i >= left && bottom >= top; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;

    // go up
    for (let i = bottom; i >= top && right >= left; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }

  return res;
}
// @lc code=end
