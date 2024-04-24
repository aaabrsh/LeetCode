/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
function jump(nums: number[]): number {
  // Find the maximum jump reachable from each position
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i] + i, nums[i - 1]);
  }

  let jump = 0;
  let i = 0;

  // Greedy approach: Jump as far as possible in each step
  while (i < nums.length - 1) {
    jump++;
    i = nums[i];
  }

  return jump;
}

// @lc code=end
