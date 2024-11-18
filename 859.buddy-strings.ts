/*
 * @lc app=leetcode id=859 lang=typescript
 *
 * [859] Buddy Strings
 */

// @lc code=start
function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  const diff: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) diff.push(i);
    if (diff.length > 2) return false;
  }

  if (!diff.length) return s.length != [...new Set(s)].length; // compare length of s with length of unique letters in s

  const [i, j] = diff;
  return s[i] === goal[j] && s[j] === goal[i];
}
// @lc code=end
