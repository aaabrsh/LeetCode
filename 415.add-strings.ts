/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let result = "";
  let carry = 0;

  for (let i = 1; i <= Math.max(num1.length, num2.length); i++) {
    // adding + before a string casts the string to an integer
    const a = +num1[num1.length - i] || 0;
    const b = +num2[num2.length - i] || 0;
    const sum = a + b + carry;

    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }

  if (carry) result = carry + result;
  return result;
}
// @lc code=end
