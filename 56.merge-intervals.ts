/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let res: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i + 1] !== undefined) {
      if (intervals[i][1] >= intervals[i + 1][0]) {
        const min = Math.min(intervals[i][0], intervals[i + 1][0]);
        const max = Math.max(intervals[i][1], intervals[i + 1][1]);
        intervals[i + 1] = [min, max];
      } else {
        res.push(intervals[i]);
      }
    } else {
      res.push(intervals[i]);
    }
  }

  return res;
}
// @lc code=end
