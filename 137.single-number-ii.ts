/*
 * @lc app=leetcode id=137 lang=typescript
 *
 * [137] Single Number II
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  const hash: any = {}; // hash of nums that appear once
  const hash_2: any = {}; // hash of nums that appear twice

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      delete hash[nums[i]];
      hash_2[nums[i]] = 2;
    } else {
      hash[nums[i]] = 1;
    }
  }

  for (const key in hash) {
    if (!hash_2[key]) return parseInt(key);
  }

  return parseInt(Object.keys(hash)[0]);
}
// @lc code=end
