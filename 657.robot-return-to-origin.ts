/*
 * @lc app=leetcode id=657 lang=typescript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
function judgeCircle(moves: string): boolean {
  if (moves.length % 2 !== 0) return false; // for a circle, the number of moves must be even

  let horizontal = 0;
  let vertical = 0;

  for (let m of moves) {
    switch (m) {
      case "U":
        vertical++;
        break;
      case "D":
        vertical--;
        break;
      case "R":
        horizontal++;
        break;
      case "L":
        horizontal--;
        break;
    }
  }

  return horizontal === 0 && vertical === 0;
}
// @lc code=end
