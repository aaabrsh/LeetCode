/*
 * @lc app=leetcode id=38 lang=typescript
 *
 * [38] Count and Say
 */

// @lc code=start
function countAndSay(n: number): string {
  if (n === 1) return "1";
  else {
    let say = countAndSay(n - 1);
    let count = "";
    let cur = say[0];
    let freq = 1;

    for (let i = 1; i < say.length; i++) {
      if (say[i] === cur) freq++;
      else {
        count += `${freq}${cur}`;
        cur = say[i];
        freq = 1;
      }
    }

    count += `${freq}${cur}`;

    return count;
  }
}
// @lc code=end
