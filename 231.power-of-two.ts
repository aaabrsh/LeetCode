/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  if (n <= 2 && n > 0) {
    return true;
  }

  if (n % 2 !== 0 || n <= 0) {
    return false;
  }

  return isPowerOfTwo(n / 2);
}
// @lc code=end
