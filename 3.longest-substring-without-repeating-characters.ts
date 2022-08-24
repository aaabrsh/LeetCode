/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let res: string = "";
  let cur: string = '';

  for (let i = 0; i < s.length; i++) {
      if (cur.indexOf(s[i]) != -1) {
        res = (cur.length > res.length) ? cur : res;
        i = s.search(s[i]);
        s = s.slice(i + 1, s.length);
        i=-1;
        cur = "";
        continue;
      }

      cur += s[i];
  }

  res = (cur.length > res.length) ? cur : res;
  return res.length;
}
// @lc code=end
