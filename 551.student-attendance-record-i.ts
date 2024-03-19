/*
 * @lc app=leetcode id=551 lang=typescript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
function checkRecord(s: string): boolean {
  let a_count_total = 0;
  let l_count_consecutive = 0;

  for (const c of s) {
    switch (c) {
      case "A":
        a_count_total++;
        l_count_consecutive = 0;
        break;
      case "L":
        l_count_consecutive++;
        break;
      default:
        l_count_consecutive = 0;
    }

    if (l_count_consecutive >= 3 || a_count_total >= 2) return false;
  }

  return true;
}
// @lc code=end
