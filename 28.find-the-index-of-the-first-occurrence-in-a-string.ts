/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  const len = needle.length;

  for (let i = 0; i <= haystack.length - len; i++) {
    const element = haystack.substring(i, i + len);
    if (element === needle) {
      return i;
    }
  }

  return -1;
}
// @lc code=end
