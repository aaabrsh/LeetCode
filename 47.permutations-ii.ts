/*
 * @lc app=leetcode id=47 lang=typescript
 *
 * [47] Permutations II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const permutations: number[][] = [];
  const permutations_hash: { [key: string]: boolean } = {};

  const buildPermutations = (
    unprocessed: number[],
    processed: number[] = []
  ) => {
    if (unprocessed.length === 0 && !permutations_hash[processed.toString()]) {
      permutations.push(processed);
      permutations_hash[processed.toString()] = true;
      return;
    }

    for (let i = 0; i < unprocessed.length; i++) {
      if (unprocessed[i] !== unprocessed[i - 1])
        buildPermutations(
          unprocessed.slice(0, i).concat(unprocessed.slice(i + 1)),
          [...processed, unprocessed[i]]
        );
    }
  };

  buildPermutations(nums);

  return permutations;
}
// @lc code=end
