/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  candidates = candidates.sort((a, b) => a - b);

  const combinations: number[][] = [];

  //  build the combinations and for each combination, check if the sum is equal to target
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
      if (i > start && candidates[i] === candidates[i - 1]) continue; // to avoid duplicate checking skip the numbers that are the same as the previous number

      const temp = [...combination, candidates[i]].sort((a, b) => a - b);

      let newSum = sum + candidates[i];

      if (newSum === target) {
        combinations.push(temp);
        return;
      } else if (newSum < target) {
        /**
         * we pass `i` instead of `i + 1` and `iteration` instead of `iteration - 1` to the next recursion,
         * becasue we want to check if the repitition of the current number can reach the target
         */
        buildCombinations(iteration, i, temp, newSum);
      } else {
        return;
      }
    }
  };

  buildCombinations(candidates.length);

  return combinations;
}

// @lc code=end
