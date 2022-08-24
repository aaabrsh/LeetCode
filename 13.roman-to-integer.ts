/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  var mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  var result = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        switch (s[i + 1]) {
          case "V":
            result += 4;
            i++;
            break;

          case "X":
            result += 9;
            i++;
            break;

          default:
            result += 1;
            break;
        }
        break;

      case "V":
        result += 5;
        break;

      case "X":
        switch (s[i + 1]) {
          case "L":
            result += 40;
            i++;
            break;

          case "C":
            result += 90;
            i++;
            break;

          default:
            result += 10;
            break;
        }
        break;

      case "L":
        result += 50;
        break;

      case "C":
        switch (s[i + 1]) {
          case "D":
            result += 400;
            i++;
            break;

          case "M":
            result += 900;
            i++;
            break;

          default:
            result += 100;
            break;
        }
        break;
      case "D":
        result += 500;
        break;
      case "M":
        result += 1000;
        break;
    }
  }

  return result;
}
// @lc code=end
