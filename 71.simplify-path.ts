/*
 * @lc app=leetcode id=71 lang=typescript
 *
 * [71] Simplify Path
 */

// @lc code=start
function simplifyPath(path: string): string {
  const res: string[] = [];
  let word = "";

  for (let i = 0; i < path.length; i++) {
    const p = path[i];
    if (p === "/" && word.length) {
      if (word === "..") {
        // go back one directory(word) if we have two dots
        res.pop();
      } else if (word !== ".") {
        // ignore single dots, but if it something else(a valid directory name), add it to the end result
        res.push(word);
      }

      // reset the temp variable to process a new directory/word
      word = "";
    } else if (p !== "/") {
      // find the word that is between two '/'s (this word is a directory name) and add it to a temporary 'word' variable
      word += p;
    }
  }

  // process the directory/word at the end of the path that wouldn't be processed inside the above loop
  if (word.length) {
    if (word === "..") {
      res.pop();
    } else if (word !== ".") {
      res.push(word);
    }
  }

  return "/" + res.join("/"); // join the directories with "/" and return it
}
// @lc code=end
