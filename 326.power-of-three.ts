/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  if (n === 1) {
    return true;
  } else if (n % 3 !== 0 || n === 0) {
    return false;
  }
  return isPowerOfThree(n / 3);
}
// @lc code=end
