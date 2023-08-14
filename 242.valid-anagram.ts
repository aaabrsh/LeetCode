/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  s = s.split("").sort().join();
  t = t.split("").sort().join();

  return s === t ? true : false;
}
// @lc code=end
