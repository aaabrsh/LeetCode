/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  let combinations: number[][] = [[], nums];

  /**
   *
   * @param iteration how much recursion we have left. Starts from `nums.length - 1`, and breaks the recursion when zero
   * @param start start of the index on nums where the values are yet to be added to `combination`. default is 0
   * @param combination the subset we have formed so far. default = []
   * @returns void
   */
  const buildSubsets = (
    iteration: number,
    start: number = 0,
    combination: number[] = []
  ) => {
    if (iteration === 0) return;

    for (let i = start; i < nums.length; i++) {
      combinations.push([...combination, nums[i]]);
      buildSubsets(iteration - 1, i + 1, [...combination, nums[i]]);
    }
  };

  buildSubsets(nums.length - 1);

  return combinations;
}
// @lc code=end
