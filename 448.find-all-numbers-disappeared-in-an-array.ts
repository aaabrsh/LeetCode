/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const hash: number[] = Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = -1;
  }

  const res: number[] = [];
  for (let i = 1; i <= nums.length; i++) {
    if (hash[i] !== -1) res.push(i);
  }

  return res;
}
// @lc code=end
