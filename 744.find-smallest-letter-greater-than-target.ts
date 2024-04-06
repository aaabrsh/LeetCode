/*
 * @lc app=leetcode id=744 lang=typescript
 *
 * [744] Find Smallest Letter Greater Than Target
 */

// @lc code=start
function nextGreatestLetter(letters: string[], target: string): string {
  for (let i = 0; i < letters.length; i++) {
    if (target < letters[i]) return letters[i];
  }

  return letters[0];
}
// @lc code=end
