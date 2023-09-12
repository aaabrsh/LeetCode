/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let hasCapital = capitalLetters.includes(word[0]);

  for (let i = 1; i < word.length; i++) {
    const letter = word[i];
    if (capitalLetters.includes(letter)) {
      if (!hasCapital) return false;
    } else if (hasCapital) {
      if (i === 1) {
        hasCapital = false;
        continue;
      }
      return false;
    }
  }

  return true;
}
// @lc code=end
