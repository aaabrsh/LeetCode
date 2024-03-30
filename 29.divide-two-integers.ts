/*
 * @lc app=leetcode id=29 lang=typescript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
  const hasNegative =
    (dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0);

  // change negative numbers to positive
  if (dividend < 0) dividend = -dividend;
  if (divisor < 0) divisor = -divisor;

  if (divisor > dividend) return 0;

  let sum = divisor;
  let count = 1;
  while (sum < dividend) {
    sum += sum;
    count += count;
  }

  while (sum > dividend) {
    sum -= divisor;
    count--;
  }

  let quotient = hasNegative ? 0 - count : count;
  // Define the maximum and minimum values for a 32-bit signed integer
  const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = -Math.pow(2, 31);
  quotient = quotient > MAX_INT ? MAX_INT : quotient;
  quotient = quotient < MIN_INT ? MIN_INT : quotient;

  return quotient;
}
// @lc code=end
