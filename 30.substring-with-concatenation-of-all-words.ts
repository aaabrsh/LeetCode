/*
 * @lc app=leetcode id=30 lang=typescript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start
function findSubstring(s: string, words: string[]): number[] {
  // this solution assumes all words inside the words array have the same length
  if (words.length === 0) return [];

  const len = words[0].length;

  const permutations_length = len * words.length;
  if (s.length < permutations_length) return [];

  const max_word_freq: { [key: string]: number } = {};
  let words_hash: { [key: string]: number } = {};

  words.forEach((word) => {
    max_word_freq[word] = max_word_freq[word] ? ++max_word_freq[word] : 1;
    words_hash[word] = 0;
  });

  const initail_words_hash = { ...words_hash };

  const indices: number[] = [];

  for (let i = 0; i < len; i++) {
    let l = i;
    let r = i;
    let match = 0;

    while (l <= r && l < s.length) {
      const str = s.slice(r, r + len);

      if (words_hash[str] >= 0 && words_hash[str] < max_word_freq[str]) {
        words_hash[str]++;
        r = r + len;
        match++;
      } else if (!words_hash[str]) {
        l = l + len;
        r = l;
        match = 0;
        words_hash = { ...initail_words_hash };
      } else {
        const temp = s.slice(l, l + len);
        if (words_hash[temp]) {
          match--;
          words_hash[temp]--;
        }

        l = l + len;
      }

      if (match === words.length) {
        indices.push(l);
      }
    }
  }

  return indices;
}

// @lc code=end
