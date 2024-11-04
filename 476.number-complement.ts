/*
 * @lc app=leetcode id=476 lang=typescript
 *
 * [476] Number Complement
 */

// @lc code=start
function findComplement(num: number): number {
  // get binary of number
  const binary = decimalToBinary(num);

  /**
   * flip bits, ignore the first ones because when these bits
   * are flipped, they become leading zeroes which are not needed
   */
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === 1 && i === 0) {
      binary.shift();
      i--;
      continue;
    }

    if (binary[i] === 1) {
      binary[i] = 0;
    } else {
      binary[i] = 1;
    }
  }

  // convert the binary back to decimal
  const complement = binaryToDecimal(binary);

  return complement;
}

function decimalToBinary(decimal: number): number[] {
  // NB: to change decimal to binary, it is also possible to do `decimal.toString(2)`
  const binary: number[] = [];
  while (decimal >= 2) {
    const bit = decimal % 2;
    binary.unshift(bit);
    decimal = Math.floor(decimal / 2);
  }

  binary.unshift(decimal);

  return binary;
}

function binaryToDecimal(binary: number[]): number {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    decimal += binary[i] * Math.pow(2, binary.length - 1 - i);
  }

  return decimal;
}
// @lc code=end
