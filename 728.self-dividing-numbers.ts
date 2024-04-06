/*
 * @lc app=leetcode id=728 lang=typescript
 *
 * [728] Self Dividing Numbers
 */

// @lc code=start
function selfDividingNumbers(left: number, right: number): number[] {
  let nums: number[] = [];

  for (let i = left; i <= right; i++) {
    let digits = getDigits(i);

    let self_dividing = true;
    for (let j = 0; j < digits.length; j++) {
      if (i % digits[j] !== 0) self_dividing = false;
    }

    if (self_dividing) nums.push(i);
  }

  return nums;
}

function getDigits(num: number): number[] {
  let digits: number[] = [];
  while (num) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  return digits;
}
// @lc code=end
