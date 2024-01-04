/*
 * @lc app=leetcode id=441 lang=typescript
 *
 * [441] Arranging Coins
 */

// @lc code=start
function arrangeCoins(n: number): number {
  let row = 0;
  while (n > 0) {
    row++;
    n -= row;
  }

  return n < 0 ? row - 1 : row;
}
// @lc code=end
