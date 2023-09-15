/*
 * @lc app=leetcode id=2418 lang=typescript
 *
 * [2418] Sort the People
 */

// @lc code=start
function sortPeople(names: string[], heights: number[]): string[] {
  // sort the heights array in descending order
  for (let i = 0; i < heights.length; i++) {
    for (let j = i; j > 0; j--) {
      if (heights[j] > heights[j - 1]) {
        // swap heights
        heights[j] = heights[j - 1] + heights[j];
        heights[j - 1] = heights[j] - heights[j - 1];
        heights[j] = heights[j] - heights[j - 1];

        // swap names
        const temp = names[j];
        names[j] = names[j - 1];
        names[j - 1] = temp;
      } else {
        break;
      }
    }
  }

  return names;
}
// @lc code=end
