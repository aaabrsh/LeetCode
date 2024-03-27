/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  // using a hash table
  const hash: any = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      delete hash[nums[i]];
    } else {
      hash[nums[i]] = 1;
    }
  }

  return parseInt(Object.keys(hash)[0]);
}
// @lc code=end
