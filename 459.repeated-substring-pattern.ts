/*
 * @lc app=leetcode id=459 lang=typescript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
  let substr = s[0];

  let i = 1;
  while (i < s.length) {
    if (i + substr.length > s.length) return false;

    const testSubstr = s.substring(i, i + substr.length);

    if (testSubstr !== substr) {
      substr += s[substr.length];
      i = substr.length;
    } else {
      i += substr.length;
    }
  }

  return substr === s ? false : true;
}
// @lc code=end
