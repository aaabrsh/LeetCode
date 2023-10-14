/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    const temp = s[l];
    s[l] = s[r];
    s[r] = temp;

    l++;
    r--;
  }

  // a one line solution
  // s = s.reverse()
}
// @lc code=end
