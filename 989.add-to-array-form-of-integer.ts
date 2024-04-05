/*
 * @lc app=leetcode id=989 lang=typescript
 *
 * [989] Add to Array-Form of Integer
 */

// @lc code=start

function addToArrayForm(num: number[], k: number): number[] {
  let res: number[] = [];
  let carry = 0;
  let i = num.length - 1;

  while (k || i >= 0) {
    let last_digit = k % 10;
    k = Math.floor(k / 10);

    let sum = last_digit + carry;
    if (num[i]) sum += num[i];
    carry = Math.floor(sum / 10);

    sum = sum % 10;
    res.unshift(sum);
    i--;

    if (carry && i >= 0) {
      num[i] += carry;
      carry = 0;
    }
  }

  if (carry || k) {
    res.unshift(carry + k);
  }

  return res;
}

/*******************SIMPLE SOLUTION *******************/
// function addToArrayForm(num: number[], k: number): number[] {
//   let n = BigInt(num.join(""));
//   let m = BigInt(k);
//   let sum: any = n + m;
//   sum = sum.toString();
//   sum = sum.split("");
//   sum = sum.map((s) => parseInt(s));
//   return sum as number[];
// }
// @lc code=end
