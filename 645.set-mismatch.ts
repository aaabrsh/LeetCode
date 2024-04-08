/*
 * @lc app=leetcode id=645 lang=typescript
 *
 * [645] Set Mismatch
 */

// @lc code=start
function findErrorNums(nums: number[]): number[] {
  let totalSum = 0;
  let sum = 0;
  let duplicate = 0;

  nums = nums
    .sort((a, b) => a - b)
    .filter((val, i, arr) => {
      const isUnique = !arr[i - 1] || val !== arr[i - 1];

      if (isUnique) sum += val;
      else duplicate = val;

      totalSum += i + 1;

      return isUnique;
    });

  return [duplicate, totalSum - sum];
}
// @lc code=end
