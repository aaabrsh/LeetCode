/*
 * @lc app=leetcode id=693 lang=typescript
 *
 * [693] Binary Number with Alternating Bits
 */

// @lc code=start
function hasAlternatingBits(n: number): boolean {
  const binary = convertToBinary(n);
  return checkAlternatingBits(binary);
}

function convertToBinary(n: number): string {
  let binary: string = "";

  while (n > 1) {
    binary = (n % 2).toString() + binary;
    n = Math.floor(n / 2);
  }

  if (n) binary = n.toString() + binary;

  return binary;
}

function checkAlternatingBits(binary: string): boolean {
  for (let i = 1; i < binary.length; i++) {
    if (binary[i - 1] === binary[i]) return false;
  }

  return true;
}
// @lc code=end
