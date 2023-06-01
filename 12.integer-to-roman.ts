/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
  let response: string = "";
  let numStr = `${num}`;

  for (let i = 0; i < numStr.length; i++) {
    const len = numStr.length - 1 - i;
    const firstDigit = Math.floor(num / Math.pow(10, len));
    const nthPlace = firstDigit * Math.pow(10, len);
    response += getRoman(nthPlace, Math.pow(10, len));
    num = num % Math.pow(10, len);
  }

  return response;
}

function getRoman(num: number, nthPlace: number): string {
  const lookup: any = {
    "1": "I",
    "4": "IV",
    "5": "V",
    "9": "IX",
    "10": "X",
    "40": "XL",
    "50": "L",
    "90": "XC",
    "100": "C",
    "400": "CD",
    "500": "D",
    "900": "CM",
    "1000": "M",
  };

  if (
    num === 1 * nthPlace ||
    num === 4 * nthPlace ||
    num === 5 * nthPlace ||
    num === 9 * nthPlace
  ) {
    return lookup[num];
  } else if (num < 4 * nthPlace) {
    return lookup[1 * nthPlace].repeat(num / (1 * nthPlace));
  } else {
    return (
      lookup[5 * nthPlace] +
      lookup[1 * nthPlace].repeat((num - 5 * nthPlace) / (1 * nthPlace))
    );
  }
}
// @lc code=end
