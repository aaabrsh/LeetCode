/*
 * @lc app=leetcode id=65 lang=typescript
 *
 * [65] Valid Number
 */

// @lc code=start
function isNumber(s: string): boolean {
  const number = {
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
    "7": true,
    "8": true,
    "9": true,
  };

  let expect_E = false; // a digit must come before e
  let one_E_found = false;
  let expectDot = true;
  let expectSign = true;
  let expectDigit = true; // if a digit must come (non-optional)

  // a valid number cannot start with an 'e'
  if (s[0] === "e" || s[0] === "E") return false;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (number[c]) {
      expectDigit = false;
      expectSign = false; // a sign can't come after a digit
      if (one_E_found) expect_E = false;
      else expect_E = true;
      continue;
    }

    if (c === "+" || c === "-") {
      if (expectSign) {
        expectSign = false;
        expectDigit = true; // a digit must come after a sign
        continue;
      } else return false;
    }

    if (c === "e" || c === "E") {
      if (expect_E) {
        one_E_found = true;
        expect_E = false;
        expectSign = true; // a sign can come after e
        expectDot = false;
        expectDigit = true; // a digit must come after e
        continue;
      } else return false;
    }

    if (c === ".") {
      if (expectDot) {
        expectDot = false;
        expectSign = false;
        if (!expectDigit) expectDigit = false; // '4.' is considered valid
        else expectDigit = true; // '.' is invalid. A digit must come after it
        continue;
      } else return false;
    }

    return false;
  }

  return !expectDigit;
}
// @lc code=end
