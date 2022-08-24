/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  let arr: number[] = [];

  if (x < 0) {
    return false;
  }

  while (x > 0) {
    let lastNum = x % 10;
    x = x / 10;
    x = Math.floor(x);
    arr.push(lastNum);
  }

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
// @lc code=end
