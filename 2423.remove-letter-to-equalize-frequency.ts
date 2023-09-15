/*
 * @lc app=leetcode id=2423 lang=typescript
 *
 * [2423] Remove Letter To Equalize Frequency
 */

// @lc code=start
function equalFrequency(word: string): boolean {
  const words: string[] = word.split("").sort();

  const countsHash: { [key: number]: number } = {};
  let count = 1;

  for (let i = 1; i < words.length; i++) {
    if (words[i] === words[i - 1]) {
      count++;
    } else {
      !countsHash[count] ? (countsHash[count] = 1) : countsHash[count]++;
      count = 1;
    }
  }

  !countsHash[count] ? (countsHash[count] = 1) : countsHash[count]++;

  let counts: number[] = [];
  for (const [key, value] of Object.entries(countsHash)) {
    for (let i = 0; i < value; i++) {
      counts.push(parseInt(key));
    }
  }

  counts = counts.sort((a, b) => b - a);

  if (
    counts[counts.length - 1] !== counts[counts.length - 2] &&
    (counts[counts.length - 2] - 1 !== counts[counts.length - 1] ||
      (counts[0] === counts[counts.length - 2] && counts.length > 2))
  ) {
    counts[counts.length - 1] === 1
      ? counts.pop()
      : counts[counts.length - 1]--;
  } else {
    counts[0] === 1 ? counts.shift() : counts[0]--;
  }

  for (let i = 1; i < counts.length; i++) {
    if (counts[i] !== counts[i - 1]) {
      return false;
    }
  }

  return true;
}
// @lc code=end
