/*
 * @lc app=leetcode id=500 lang=typescript
 *
 * [500] Keyboard Row
 */

// @lc code=start
function findWords(words: string[]): string[] {
  let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let res: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let row = -1;
    for (let j = 0; j < word.length; j++) {
      const l = word[j].toLowerCase();
      if (row === -1) {
        if (rows[0].includes(l)) row = 0;
        else if (rows[1].includes(l)) row = 1;
        else if (rows[2].includes(l)) row = 2;
        res.push(word);
      } else {
        if (!rows[row].includes(l)) {
          res.pop();
          break;
        }
      }
    }
  }

  return res;
}
// @lc code=end
