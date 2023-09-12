/*
 * @lc app=leetcode id=997 lang=typescript
 *
 * [997] Find the Town Judge
 */

// @lc code=start
function findJudge(n: number, trust: number[][]): number {
  if (trust.length === 0 && n === 1) {
    return 1;
  }

  const truster: { [key: number]: number } = {};
  const trusted: { [key: number]: number } = {};

  trust.forEach((t) => {
    truster[t[0]] ? truster[t[0]]++ : (truster[t[0]] = 1);
    trusted[t[1]] ? trusted[t[1]]++ : (trusted[t[1]] = 1);
  });

  for (const [key, value] of Object.entries(trusted)) {
    if (value === n - 1 && !truster[key]) {
      return parseInt(key);
    }
  }

  return -1;
}
// @lc code=end
