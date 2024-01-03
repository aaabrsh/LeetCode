/*
 * @lc app=leetcode id=434 lang=typescript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
function countSegments(s: string): number {
  let count = 0;

  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      if (temp.length > 0) {
        count++;
        temp = "";
      }
    } else {
      temp += s[i];
    }
  }

  if (temp.length > 0) {
    count++;
  }

  return count;
}
// @lc code=end
