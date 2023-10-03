/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
  const hash: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] !== undefined ? hash[s[i]] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!hash[t[i]]) {
      return t[i];
    } else {
      hash[t[i]]--;
    }
  }

  return "";
}
// @lc code=end
