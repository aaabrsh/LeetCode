/*
 * @lc app=leetcode id=424 lang=typescript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
  const charCount = {};
  let max = 0;
  let domChar = 0;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    if (s[r] in charCount) charCount[s[r]]++;
    else charCount[s[r]] = 1;

    domChar = Math.max(domChar, charCount[s[r]]);

    // window size = r - l + 1
    // window size(r - l + 1) - dominant character count = number of replacements needed
    //if the number of replacements needed is bigger than k, invalid
    while (r - l + 1 - domChar > k) {
      // if the substring(window size) is invalid, then move the left pointer to the right. i.e starting a new window
      charCount[s[l]]--;
      if (charCount[s[l]] === 0) delete charCount[s[l]];
      l++;
    }

    max = Math.max(max, r - l + 1); // choose the max b/n previous max and the current window size
  }

  return max;
}
// @lc code=end
