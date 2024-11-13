/*
 * @lc app=leetcode id=57 lang=typescript
 *
 * [57] Insert Interval
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const res: number[][] = [];

  let i = 0;
  while (i < intervals.length) {
    if (intervals[i][0] < newInterval[0] && intervals[i][1] < newInterval[0]) {
      // if the current interval is before the new interval
      res.push(intervals[i]);
    } else if (
      intervals[i][0] > newInterval[1] &&
      intervals[i][1] > newInterval[1]
    ) {
      // if the current interval is after the new interval
      break;
    } else {
      // if interval overlaps with newInterval, take the min and max of the intervals to merge them
      newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
      newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    }
    i++;
  }

  res.push(newInterval);
  res.push(...intervals.slice(i)); // add remaining intervals

  return res;
}
// @lc code=end
