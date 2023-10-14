/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
  let res: number[] = [0, 1, 1, 2];

  if (n < 4) {
    return res.splice(0, n + 1);
  }

  for (let i = 4; i <= n; i++) {
    let t = Math.floor(i / 4);
    let r = i % 4;

    if (r === 1 || r === 2) {
      res.push(res[t] + 1);
    } else if (r === 3) {
      res.push(res[t] + 2);
    } else {
      res.push(res[t]);
    }
  }

  return res;
}
// @lc code=end
