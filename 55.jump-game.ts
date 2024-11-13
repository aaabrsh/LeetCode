/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  /**
   * start from the end and see if n-1 can reach n, if not
   * check n-2, n-3 and so on. if no node can reach n and
   * we are at the start of the array, return false. when we
   * find a node x that can reach n, then check x-1 if it
   * can reach x go on like this until the start of the array is reached
   */

  if (nums.length === 1) return true;

  let jump = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= jump) jump = 1;
    else jump++;
  }

  return jump <= nums[0];
}
// @lc code=end
