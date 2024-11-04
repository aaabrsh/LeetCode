/*
 * @lc app=leetcode id=1009 lang=typescript
 *
 * [1009] Complement of Base 10 Integer
 */

// @lc code=start
function bitwiseComplement(n: number): number {
  const binary = n.toString(2);
  let flippedBinary = "";

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      flippedBinary += "0";
    } else {
      flippedBinary += "1";
    }
  }

  return parseInt(flippedBinary, 2);
}
// @lc code=end
