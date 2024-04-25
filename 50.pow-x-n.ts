/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n === 1 || x === 1) return x;

  let negative = n < 0;
  if (negative) n *= -1;

  let res = 1;

  while (n > 0) {
    if (n % 2 === 0) {
      x = x * x;
      n = n / 2;
    } else {
      res *= x;
      n--;
    }
  }

  if (negative) return 1 / res;

  return res;
}

// @lc code=end
