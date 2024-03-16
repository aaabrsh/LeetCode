/*
 * @lc app=leetcode id=506 lang=typescript
 *
 * [506] Relative Ranks
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
  const copy = [...score].sort((a, b) => b - a);
  const hash: { [key: number]: string } = {};

  for (let i = 0; i < copy.length; i++) {
    switch (i) {
      case 0:
        hash[copy[i]] = "Gold Medal";
        break;
      case 1:
        hash[copy[i]] = "Silver Medal";
        break;
      case 2:
        hash[copy[i]] = "Bronze Medal";
        break;
      default:
        hash[copy[i]] = `${i + 1}`;
    }
  }

  const res: string[] = [];
  for (let i = 0; i < score.length; i++) {
    res[i] = hash[score[i]];
  }

  return res;
}
// @lc code=end
