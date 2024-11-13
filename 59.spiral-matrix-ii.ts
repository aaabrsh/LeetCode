/*
 * @lc app=leetcode id=59 lang=typescript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  const res: number[][] = new Array(n).fill([]).map((r) => []);

  let num = 1;
  while (bottom >= top && right >= left) {
    // go right
    for (let i = left; i <= right; i++) {
      res[top][i] = num++; // assign and increment
    }
    top++;

    // go down
    for (let i = top; i <= bottom; i++) {
      res[i][right] = num++;
    }
    right--;

    // go left
    for (let i = right; i >= left && bottom >= top; i--) {
      res[bottom][i] = num++;
    }
    bottom--;

    // go up
    for (let i = bottom; i >= top && right >= left; i--) {
      res[i][left] = num++;
    }
    left++;
  }

  return res;
}
// @lc code=end
