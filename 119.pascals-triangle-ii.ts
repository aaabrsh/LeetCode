/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  // formula is (nth row ith num) = (prev * (N - i + 1))/i

  const res: number[] = [1];
  for (let i = 1; i <= rowIndex; i++) {
    res[i] = (res[i - 1] * (rowIndex - i + 1)) / i;
  }

  return res;
}
// @lc code=end
