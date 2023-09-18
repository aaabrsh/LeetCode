/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  piles = piles.sort((a, b) => a - b);

  function checkSpeed(s: number): boolean {
    // if the speed takes less or equal to the hours available, return true
    let time: number = 0;
    for (let i = 0; i < piles.length; i++) {
      const totalTime = Math.ceil(piles[i] / s);
      time = totalTime === 0 ? time + 1 : time + totalTime;

      if (time > h) return false;
    }

    return time <= h;
  }

  // do binary search to find the minimum speed
  let min = 1; // min speed is one banana/hour
  let max = piles[piles.length - 1]; // max speed is the larges pile/hour
  while (min < max) {
    const mid = Math.floor((min + max) / 2);

    if (checkSpeed(mid)) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return min;
}
// @lc code=end
