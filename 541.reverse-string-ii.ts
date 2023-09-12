/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  for (let i = 0; i < s.length; i += 2 * k) {
    let substr = s.slice(i, i + k);
    substr = substr.split("").reverse().join("");
    s = s.slice(0, i) + substr + s.slice(i + k);
  }

  return s;
}
// @lc code=end
