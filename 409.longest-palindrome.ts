/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
function longestPalindrome(s: string): number {
  const hash: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]]++;
    } else {
      hash[s[i]] = 1;
    }
  }

  let hasOne = false;
  let longest = 0;

  for (const [key, value] of Object.entries(hash)) {
    longest += Math.floor(value / 2) * 2;
    if (value % 2 === 1 && !hasOne) {
      hasOne = true;
    }
  }

  return hasOne ? longest + 1 : longest;
}
// @lc code=end
