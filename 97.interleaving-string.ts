/*
 * @lc app=leetcode id=97 lang=typescript
 *
 * [97] Interleaving String
 */

// @lc code=start
function isInterleave(s1: string, s2: string, s3: string): boolean {
  const l1 = s1.length;
  const l2 = s2.length;
  const l3 = s3.length;

  // If the lengths of s1 and s2 combined do not match the length of s3, return false
  if (l1 + l2 !== l3) return false;

  // Initialize a 2D Dynamic Programming array with false values. It has a size of (l1+1, l2+1)
  const dp: boolean[][] = Array(l1 + 1)
    .fill(null)
    .map(() => Array(l2 + 1).fill(false));

  dp[0][0] = true; // Base case: empty strings interleave to form an empty string

  // Fill the DP table
  for (let i = 0; i <= l1; i++) {
    for (let j = 0; j <= l2; j++) {
      // Check if the current character of s1 matches the current character of s3
      if (i > 0) {
        dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]);
      }

      // Check if the current character of s2 matches the current character of s3
      if (j > 0) {
        dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
      }
    }
  }

  return dp[l1][l2];
}
// @lc code=end
