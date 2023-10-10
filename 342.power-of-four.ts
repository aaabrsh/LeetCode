/*
 * @lc app=leetcode id=342 lang=typescript
 *
 * [342] Power of Four
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
  if (n === 1) {
    return true;
  } else if (n % 4 !== 0 || n === 0) {
    return false;
  }

  return isPowerOfFour(n / 4);
}
// @lc code=end
