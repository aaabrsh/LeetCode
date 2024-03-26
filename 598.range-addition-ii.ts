/*
 * @lc app=leetcode id=598 lang=typescript
 *
 * [598] Range Addition II
 */

// @lc code=start
function maxCount(m: number, n: number, ops: number[][]): number {
  /**
   * we take the smallest matrix(m*n) that can be built from ops and
   * return its size because that matrix always gets incremented on all
   * ops operations and therefore will contain the matrix with the max value.
   * eg. if we have ops = [[2,2], [3,3]] the matrix 2x2 will be incremented 
   * in both ops[0] = [2,2] and ops[1] = [3,3] operations and therefore will 
   * contain the maximum numbers
   */
  for (let i = 0; i < ops.length; i++) {
    if (ops[i][0] < m) m = ops[i][0];
    if (ops[i][1] < n) n = ops[i][1];
  }

  return m * n;
}
// @lc code=end
