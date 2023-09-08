/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  let l = 0;
  let r = x;

  if (x * x === x) {
    return x;
  }

  while (l < r) {
    let mid = Math.floor((r + l) / 2);

    if (mid * mid < x) {
      l = mid + 1;
    } else if (mid * mid > x) {
      r = mid - 1;
    } else {
      return mid;
    }
  }

  return l * l > x ? l - 1 : l;
}
// @lc code=end
