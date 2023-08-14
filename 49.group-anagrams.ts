/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const hash: any = {};
  strs.forEach((str, i) => {
    const sorted = str.split("").sort().join();
    if (hash[sorted]) hash[sorted].push(i);
    else hash[sorted] = [i];
  });

  let response: string[][] = [];

  for (const key in hash) {
    const indices = hash[key];
    let anagrams: string[] = [];
    for (let i = 0; i < indices.length; i++) {
      anagrams.push(strs[indices[i]]);
    }
    response.push(anagrams);
  }

  return response;
}
// @lc code=end
