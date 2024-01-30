/*
 * @lc app=leetcode id=455 lang=typescript
 *
 * [455] Assign Cookies
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let res: number = 0;

  while (g.length > 0 && s.length > 0) {
    let gi = g.shift();
    let si = s.shift();
    if (gi && si && gi <= si) {
      res++;
    } else if (gi) {
      g.unshift(gi);
    }
  }

  return res;
}
// @lc code=end
