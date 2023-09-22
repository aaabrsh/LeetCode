/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map: any = {};
  const values: any = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] && map[s[i]] != t[i]) {
      return false;
    }

    if (!map[s[i]]) {
      if (values[t[i]]) {
        return false;
      }
      map[s[i]] = t[i];
      values[t[i]] = true;
    }
  }

  return true;
}
// @lc code=end
