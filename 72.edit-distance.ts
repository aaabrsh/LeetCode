/*
 * @lc app=leetcode id=72 lang=typescript
 *
 * [72] Edit Distance
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j; // If word1 is empty, insert all characters of word2
      } else if (j === 0) {
        dp[i][j] = i; // If word2 is empty, delete all characters of word1
      } else if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // If characters match, no operation needed
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]); // Min of insert, delete, replace
      }
    }
  }

  return dp[m][n];
}
// @lc code=end
