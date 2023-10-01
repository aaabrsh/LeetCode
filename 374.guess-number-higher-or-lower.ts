/*
 * @lc app=leetcode id=374 lang=typescript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let l = 0;
  let r = n;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    let g = guess(m);

    if (g === 0) {
      return m;
    } else if (g === -1) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
}
// @lc code=end
