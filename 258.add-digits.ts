/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
  if (num < 10) {
    return num;
  }

  let sum: number = 0;
  let digits = getDigits(num);

  digits.forEach((d) => {
    sum += d;
  });

  if (sum >= 10) {
    return addDigits(sum);
  }

  return sum;
}

function getDigits(num: number): number[] {
  let digits: number[] = [];
  while (num >= 10) {
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return [num, ...digits];
}
// @lc code=end
