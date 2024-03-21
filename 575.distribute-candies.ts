/*
 * @lc app=leetcode id=575 lang=typescript
 *
 * [575] Distribute Candies
 */

// @lc code=start
function distributeCandies(candyType: number[]): number {
  candyType = candyType.sort((a, b) => a - b);

  let unique_candies: number[] = [];

  for (let i = 0; i < candyType.length; i++) {
    if (unique_candies[unique_candies.length - 1] !== candyType[i]) {
      unique_candies.push(candyType[i]);
    }
  }

  let eaten_candies = 0;
  for (
    let i = unique_candies.length - 1;
    i >= 0 && eaten_candies < candyType.length / 2;
    i--
  ) {
    eaten_candies++;
  }

  return eaten_candies;
}
// @lc code=end
