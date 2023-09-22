/*
 * @lc app=leetcode id=796 lang=typescript
 *
 * [796] Rotate String
 */

// @lc code=start
function rotateString(s: string, goal: string): boolean {
  return (s + s).includes(goal) && s.length === goal.length;
}
// @lc code=end
