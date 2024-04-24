/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const permutations: number[][] = [];
  const buildPermutations = (
    unprocessed: number[],
    processed: number[] = []
  ) => {
    if (unprocessed.length === 0) {
      permutations.push(processed);
      return;
    }

    for (let i = 0; i < unprocessed.length; i++) {
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
