/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  let postfix: string[] = [];
  tokens.forEach((token) => {
    switch (token) {
      case "+":
        if (postfix.length >= 2) {
          let first = parseInt(postfix.pop() ?? "");
          let second = parseInt(postfix.pop() ?? "");
          postfix.push((first + second).toString());
        }
        break;
      case "-":
        if (postfix.length >= 2) {
          let first = parseInt(postfix.pop() ?? "");
          let second = parseInt(postfix.pop() ?? "");
          postfix.push((second - first).toString());
        } else if (postfix.length === 1) {
          let num = parseInt(postfix.pop() ?? "");
          num = num * -1;
          postfix.push(num.toString());
        }
        break;
      case "*":
        if (postfix.length >= 2) {
          let first = parseInt(postfix.pop() ?? "");
          let second = parseInt(postfix.pop() ?? "");
          postfix.push((first * second).toString());
        }
        break;
      case "/":
        if (postfix.length >= 2) {
          let first = parseInt(postfix.pop() ?? "");
          let second = parseInt(postfix.pop() ?? "");
          let quotient = second / first;
          postfix.push(Math.trunc(quotient).toString());
        }
        break;
      default:
        postfix.push(token);
        break;
    }
  });
  return parseInt(postfix.pop() ?? "");
}
// @lc code=end
