/*
 * @lc app=leetcode id=482 lang=typescript
 *
 * [482] License Key Formatting
 */

// @lc code=start
function licenseKeyFormatting(s: string, k: number): string {
  let rawStr: string = s.split("-").join("");
  const extraCharsLength: number = rawStr.length % k;
  let extraChar: string = "";

  if (extraCharsLength > 0) {
    extraChar = rawStr.substring(0, extraCharsLength);
    rawStr = rawStr.substring(extraCharsLength);
  }

  let response: string = "";
  if (extraChar.length > 0) {
    response = "-" + extraChar;
  }

  let i: number = 0;
  while (i < rawStr.length) {
    response += "-" + rawStr.substring(i, i + k);
    i += k;
  }

  if (response[0] === "-") {
    response = response.substring(1);
  }

  return response.toUpperCase();
}
// @lc code=end
