/*
 * @lc app=leetcode id=748 lang=typescript
 *
 * [748] Shortest Completing Word
 */

// @lc code=start
function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const licenseWordFreq = createLicenceHashMap(licensePlate);

  let shortest = "";

  for (const word of words) {
    if (
      compareWords(word, { ...licenseWordFreq }) &&
      (shortest === "" || shortest.length > word.length)
    ) {
      shortest = word;
    }
  }

  return shortest;
}

function compareWords(
  word: string,
  wordFreq: { [key: string]: number }
): boolean {
  for (const w of word) {
    if (wordFreq[w]) wordFreq[w]--;
    if (wordFreq[w] <= 0) delete wordFreq[w];
  }

  return Object.keys(wordFreq).length > 0 ? false : true;
}

function createLicenceHashMap(plate: string) {
  let hashmap: { [key: string]: number } = {};

  for (let p of plate) {
    if (Number.isNaN(parseInt(p)) && p !== " ") {
      hashmap[p.toLowerCase()] = hashmap[p.toLowerCase()]
        ? hashmap[p.toLowerCase()] + 1
        : 1;
    }
  }

  return hashmap;
}
// @lc code=end
