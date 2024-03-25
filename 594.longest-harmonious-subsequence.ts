/*
 * @lc app=leetcode id=594 lang=typescript
 *
 * [594] Longest Harmonious Subsequence
 */

// @lc code=start
function findLHS(nums: number[]): number {
  const frequency_hash: { [key: number]: number } = {};

  let longest_subsequence = 0;
  for (let i = 0; i < nums.length; i++) {
    frequency_hash[nums[i]]
      ? frequency_hash[nums[i]]++
      : (frequency_hash[nums[i]] = 1);

    if (frequency_hash[nums[i] - 1]) {
      longest_subsequence = Math.max(
        longest_subsequence,
        frequency_hash[nums[i]] + frequency_hash[nums[i] - 1]
      );
    }

    if (frequency_hash[nums[i] + 1]) {
      longest_subsequence = Math.max(
        longest_subsequence,
        frequency_hash[nums[i]] + frequency_hash[nums[i] + 1]
      );
    }
  }

  return longest_subsequence;
}
// @lc code=end
