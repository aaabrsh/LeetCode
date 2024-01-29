/*
 * @lc app=leetcode id=682 lang=typescript
 *
 * [682] Baseball Game
 */

// @lc code=start
function calPoints(operations: string[]): number {
  const response: number[] = [];
  let total = 0;

  for (let i = 0; i < operations.length; i++) {
    const char = operations[i];

    switch (char) {
      case "+":
        const sum =
          response[response.length - 2] + response[response.length - 1];
        total += sum;
        response.push(sum);
        break;
      case "D":
        const double = response[response.length - 1] * 2;
        total += double;
        response.push(double);
        break;
      case "C":
        total -= response.pop() as number;
        break;
      default:
        const num = parseInt(char);
        response.push(num);
        total += num;
        break;
    }
  }

  return total;
}
// @lc code=end
