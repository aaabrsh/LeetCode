/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
  const hash: { [key: string]: number } = {};
  const index = 0;

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] !== undefined) {
      hash[s[i]] = -1;
    } else {
      hash[s[i]] = i;
    }
  }

  for (const key in hash) {
    if (hash[key] !== -1) {
      return hash[key];
    }
  }
  return -1;
}
// @lc code=end
