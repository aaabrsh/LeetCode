/*
 * @lc app=leetcode id=43 lang=typescript
 *
 * [43] Multiply Strings
 */

// @lc code=start
function multiply(num1: string, num2: string): string {
  // a solution without using ParseInt()

  const sol_len = num1.length + num2.length - 1;
  let solution = new Array(sol_len).fill(0);

  for (let i = num2.length - 1; i >= 0; i--) {
    const b = num2.charCodeAt(i) - "0".charCodeAt(0);

    for (let j = num1.length - 1; j >= 0; j--) {
      const a = num1.charCodeAt(j) - "0".charCodeAt(0);

      const product = a * b;
      const sum = solution[j + i] + product;

      solution[j + i] = sum % 10;
      const carry = Math.floor(sum / 10);

      if (carry) {
        if (j + i - 1 >= 0) {
          solution[j + i - 1] += carry;
        } else {
          solution.unshift(carry);
        }
      }
    }
  }

  // remove leading zeroes
  while (solution.length) {
    if (solution[0] === 0) solution.shift();
    else break;
  }

  if (solution.length === 0) return "0";

  return solution.join("");
}
// @lc code=end
