/*
 * @lc app=leetcode id=495 lang=typescript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let poisonEnd = 0;
  let totalDuration = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    const timeStamp = timeSeries[i];
    if (poisonEnd >= timeStamp && poisonEnd > 0) {
      totalDuration += timeStamp + duration - poisonEnd - 1;
    } else {
      totalDuration += duration;
    }

    poisonEnd = timeStamp + duration - 1;
  }

  return totalDuration;
}
// @lc code=end
