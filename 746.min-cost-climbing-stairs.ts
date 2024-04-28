/*
 * @lc app=leetcode id=746 lang=typescript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  /**
   * Start from the end of the array and at cost[i]
   * put the cost it would get to reach the end of the array
   */

  for (let i = cost.length - 2; i >= 0; i--) {
    cost[i] = Math.min(
      cost[i] + (cost[i + 1] ?? 0),
      cost[i] + (cost[i + 2] ?? 0)
    );
  }

  return Math.min(cost[0], cost[1]);
}
// @lc code=end
