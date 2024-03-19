/*
 * @lc app=leetcode id=557 lang=typescript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
function reverseWords(s: string): string {
  const words = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    const characters = word.split("");
    characters.reverse();
    words[i] = characters.join("");
  }

  s = words.join(" ");
  return s;
}
// @lc code=end
