/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates = candidates.sort((a, b) => a - b);

  const combinations: number[][] = [];
  const combinations_hash: { [key: string]: boolean } = {};

  const buildCombinations = (
    iteration: number,
    start: number = 0,
    combination: number[] = [],
    sum: number = 0
  ) => {
    if (iteration === 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue; // to avoid duplicate checking

      const temp = [...combination, candidates[i]].sort((a, b) => a - b);

      if (combinations_hash[temp.toString()]) return;

      let newSum = sum + candidates[i];

      if (newSum === target) {
        combinations.push(temp);
        combinations_hash[temp.toString()] = true;
        return;
      } else if (newSum < target) {
        buildCombinations(iteration - 1, i + 1, temp, newSum);
      } else {
        return;
      }
    }
  };

  buildCombinations(candidates.length);

  return combinations;
}

// @lc code=end
