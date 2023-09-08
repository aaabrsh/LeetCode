/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let incNum = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let lastnum = digits[i] + incNum;

    if (lastnum >= 10) {
      digits[i] = lastnum % 10;
      incNum = Math.floor(lastnum / 10);
      if (!digits[i - 1]) {
        digits.unshift(incNum);
        break;
      }
      continue;
    } else {
      digits[i] = lastnum;
      break;
    }
  }

  return digits;
}
// @lc code=end
