/*
 * @lc app=leetcode id=804 lang=typescript
 *
 * [804] Unique Morse Code Words
 */

// @lc code=start
function uniqueMorseRepresentations(words: string[]): number {
  const letter_to_morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  const found_codes: { [key: string]: boolean } = {};
  let unique_codes = 0;

  for (const word of words) {
    let morse_code = "";
    for (const c of word) {
      morse_code += letter_to_morse[c];
    }

    if (!found_codes[morse_code]) {
      found_codes[morse_code] = true;
      unique_codes++;
    }
  }

  return unique_codes;
}
// @lc code=end
