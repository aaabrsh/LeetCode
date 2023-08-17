/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start

/**
 *      FIRST SOLUTION:
 *  1. generate different combinations of parentheses
 *  2. collect the valid parentheses
 *      SECOND SOLUTION:
 *  1. construct a binary tree where left nodes add '(' on the parent string and right nodes add '(' on the parent node
 *  2. if number of ')' > '(', it is an invalid combination
 *  3. if number of '(' > max number of parentheses, it is an invalid combination
 *  3. collect the valid combinations as you are forming them, and return them in an array
 *
 * The tree looks like the following
 *              (
 *           /     \
 *         /         \
 *        ((          ()
 *      /    \     /     \
 *    (((   (()  ()(    ())
 */

/*******************FIRST SOLUTION *******************/
// function generateParenthesis(n: number): string[] {

//   if (n < 1) {
//     return [];
//   } else if (n === 1) {
//     return ["()"];
//   }

//   let combinations: string[] = ["(", ")"];
//   // produce combinations of parentheses
//   for (let i = 0; i < n * 2 - 1; i++) {
//     combinations = produceParenthesisCombinations(combinations, ["(", ")"]);
//   }

//   let response: string[] = [];
//   // validate the generated combinations of parentheses
//   combinations.forEach((p) => {
//     if (validateParenthesis(p)) {
//       response.push(p);
//     }
//   });
//   return response;
// }

// function produceParenthesisCombinations(a: string[], b: string[]): string[] {
//   let response: string[] = [];
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       response.push(a[i] + b[j]);
//     }
//   }

//   return response;
// }
// function validateParenthesis(parentheses: string): boolean {
//   let stack: string[] = [];

//   for (let i = 0; i < parentheses.length; i++) {
//     const p = parentheses[i];
//     if (p === "(") {
//       stack.push(p);
//     } else {
//       let temp = stack.pop();
//       if (!temp) {
//         stack.push(p);
//       } else if (temp != "(") {
//         stack.push(temp);
//         stack.push(p);
//       }
//     }
//   }

//   return stack.length === 0 ? true : false;
// }

/*******************SECOND SOLUTION *******************/
function generateParenthesis(n: number): string[] {
  let response = generate([], n, 0, 0, []);
  return response;
}

function generate(
  pString: string[],
  pCount: number,
  openP: number,
  closeP: number,
  response: string[]
): string[] {
  if (openP === pCount && closeP === pCount) {
    response.push(pString.join(""));
    return response;
  }

  if (openP < pCount) {
    // go left in the tree
    pString.push("(");
    generate(pString, pCount, openP + 1, closeP, response);
    pString.pop(); // remove the last added '('.
  }

  if (closeP < openP) {
    // go right in the tree
    pString.push(")");
    generate(pString, pCount, openP, closeP + 1, response);
    pString.pop(); // remove the last added ')'.
  }

  return response;
}
// @lc code=end
