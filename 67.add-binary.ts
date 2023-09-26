/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let res = "";
  let carry = "0";
  const len = Math.max(a.length, b.length) - 1;

  for (let i = 0; i <= len; i++) {
    let ai = a[a.length - 1 - i];
    let bi = b[b.length - 1 - i];
    let sum = "0";

    if (ai && bi) {
      if (ai === "1" && bi === "1") {
        sum = "10";
      } else if (ai === "0" && bi === "0") {
        sum = "0";
      } else {
        sum = "1";
      }
    } else if (ai) {
      sum = ai;
    } else {
      sum = bi;
    }

    if (carry === "1" && sum === "1") {
      res = "0" + res;
      carry = "1";
    } else if (sum === "10") {
      res = carry + res;
      carry = "1";
    } else if (carry === "1" || sum === "1") {
      res = "1" + res;
      carry = "0";
    } else {
      res = "0" + res;
      carry = "0";
    }
  }

  if (carry === "1") {
    res = "1" + res;
  }

  return res;
}
// @lc code=end
