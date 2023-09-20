/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  let res: number[][] = [[1]];
  if (numRows === 0) {
    return [];
  } else if (numRows === 1) {
    return [[1]];
  }

  res.push([1, 1]);

  for (let i = 2; i < numRows; i++) {
    let temp: number[] = [1];
    const last = res[res.length - 1];
    for (let j = 0; j < last.length; j++) {
      if (last[j + 1]) {
        temp.push(last[j] + last[j + 1]);
      }
    }
    temp.push(1);
    res.push(temp);
  }

  return res;
}
// @lc code=end
