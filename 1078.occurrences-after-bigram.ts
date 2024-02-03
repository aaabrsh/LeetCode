/*
 * @lc app=leetcode id=1078 lang=typescript
 *
 * [1078] Occurrences After Bigram
 */

// @lc code=start
function findOcurrences(text: string, first: string, second: string): string[] {
  const response: string[] = [];

  const textStack: string[] = text.split(" ");

  while (textStack.length) {
    const top = textStack.shift();
    if (top === first) {
      const secondToTop = textStack[0];
      if (secondToTop === second) {
        textStack[1] && response.push(textStack[1]);
        // if first and second are different, then there is no way second can be used as first on the next iteration
        if (first !== second) textStack.shift();
      }
    }
  }

  return response;
}
// @lc code=end
