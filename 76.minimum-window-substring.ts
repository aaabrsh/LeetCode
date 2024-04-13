/*
 * @lc app=leetcode id=76 lang=typescript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  if (s.length < t.length) return "";

  if (s === t) return s;

  if (s.indexOf(t) !== -1) return t;

  // build frequency hash map of `t`
  const needed_freq: { [key: string]: number } = {};
  for (const c of t) {
    needed_freq[c] = needed_freq[c] ? needed_freq[c] + 1 : 1;
  }

  let min_substr = "";
  let l = 0;
  let r = 0;
  let substr_freq: { [key: string]: number } = {}; // hash map of the frequency of characters in our substring that match characters in `t`
  let have = 0; // number of characters matching t in our substring
  let need = t.length; // number of characters we have in `t`
  while (l <= s.length - t.length && r <= s.length) {
    /**
     * move r to the right until we find a substring that matches the characters in t
     * after finding a substring, move l to the right to see if we can reduce the size of the window and still find a match
     * if moving l to the right invalidates the conditions, move r to the right until the conditions are valid again or r is at the end of the string
     * the condition we are looking for is have === need
     */

    if (have === need) {
      if (min_substr === "" || r - l < min_substr.length)
        // if we have a shorter substring, set minimum substring
        min_substr = s.substring(l, r);

      if (substr_freq[s[l]]) {
        substr_freq[s[l]]--;

        // decrement `have` if `s[l]` was a character we needed for the substring to be valid
        if (substr_freq[s[l]] < needed_freq[s[l]]) have--;
      }

      l++;
    } else {
      // we are not interested in s[r] if it is not in t
      if (needed_freq[s[r]]) {
        substr_freq[s[r]] = substr_freq[s[r]] ? substr_freq[s[r]] + 1 : 1;

        // we stop incrementing `have` after substr_freq[s[r]] === needed_freq[s[r]] because that character is an unneccessary duplicate
        if (substr_freq[s[r]] <= needed_freq[s[r]]) have++;
      }

      r++;
    }
  }

  return min_substr;
}
// @lc code=end
