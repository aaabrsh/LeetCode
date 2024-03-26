/*
 * @lc app=leetcode id=599 lang=typescript
 *
 * [599] Minimum Index Sum of Two Lists
 */

// @lc code=start
function findRestaurant(list1: string[], list2: string[]): string[] {
  const index_hash: { [key: string]: number } = {};

  list1.forEach((str, i) => {
    index_hash[str] = i;
  });

  let minSum = Infinity;
  let minSum_str: string[] = [];

  for (let i = 0; i < list2.length; i++) {
    const first_index = index_hash[list2[i]];

    if (first_index !== undefined) {
      const sum = first_index + i;
      if (sum < minSum) {
        minSum = sum;
        minSum_str = [list2[i]];
      } else if (sum === minSum) {
        minSum_str.push(list2[i]);
      }
    }
  }

  return minSum_str;
}
// @lc code=end
