/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
  // the answer can be calculated using the fibonacci sequence at the given number

  if (n < 2) {
    return n;
  }

  let first = 1;
  let second = 1;
  let third = first + second;

  for (let i = 2; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }

  return third;
}
// @lc code=end
