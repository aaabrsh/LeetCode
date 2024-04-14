/*
 * @lc app=leetcode id=77 lang=typescript
 *
 * [77] Combinations
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  let combinations: number[][] = [];

  /**
   *
   * @param iteration how much recursion we have left. Starts from the maximum(k), and breaks the recursion when zero
   * @param start numbers between `start` and `n` will be added to the current combination on this call. default = 1
   * @param combination the combination we have formed so far. default = []
   * @returns void
   */
  const buildCombinations = (
    iteration: number,
    start: number = 1,
    combination: number[] = []
  ) => {
    if (iteration === 0) {
      combinations.push(combination);
      return;
    }

    for (let i = start; i <= n; i++) {
      buildCombinations(iteration - 1, i + 1, [...combination, i]);
    }
  };

  buildCombinations(k);

  return combinations;
}
// @lc code=end
