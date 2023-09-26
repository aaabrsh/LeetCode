/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  let start = nums[0];
  let res: string[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      if (start === nums[i]) {
        res.push(`${nums[i]}`);
      } else {
        res.push(`${start}->${nums[i]}`);
      }
      start = nums[i + 1];
    }
  }

  return res;
}
// @lc code=end
