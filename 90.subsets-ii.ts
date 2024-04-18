/*
 * @lc app=leetcode id=90 lang=typescript
 *
 * [90] Subsets II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  let subsets: number[][] = [[], nums];
  const subset_hash: { [key: string]: boolean } = {}; // to avoid duplicates

  const buildSubsets = (
    iteration: number,
    start: number = 0,
    subset: number[] = []
  ) => {
    if (iteration === 0) return;

    for (let i = start; i < nums.length; i++) {
      const cur_subset = [...subset, nums[i]].sort();

      if (subset_hash[cur_subset.toString()]) continue;
      else subset_hash[cur_subset.toString()] = true;

      subsets.push(cur_subset);
      buildSubsets(iteration - 1, i + 1, cur_subset);
    }
  };

  buildSubsets(nums.length - 1);

  return subsets;
}
// @lc code=end
