/*
 * @lc app=leetcode id=292 lang=typescript
 *
 * [292] Nim Game
 */

// @lc code=start
function canWinNim(n: number): boolean {
  // the second player can just play the number that adds up to 4 and always win.
  // but if the number is not divisible by 4, then the first player has a chance to win
  return n % 4 !== 0;
}
// @lc code=end
