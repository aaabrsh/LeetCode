/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  let s_arr = s.split(" ");
  if (s_arr.length !== pattern.length) {
    return false;
  }

  const p_to_s: { [key: string]: string | null } = {
    constructor: null,
  };
  const s_to_p: { [key: string]: string | null } = {
    constructor: null,
  };
  for (let i = 0; i < pattern.length; i++) {
    if (!p_to_s[pattern[i]] && !s_to_p[s_arr[i]]) {
      p_to_s[pattern[i]] = s_arr[i];
      s_to_p[s_arr[i]] = pattern[i];
    } else if (
      p_to_s[pattern[i]] !== s_arr[i] ||
      s_to_p[s_arr[i]] !== pattern[i]
    ) {
      return false;
    }
  }

  return true;
}
// @lc code=end
