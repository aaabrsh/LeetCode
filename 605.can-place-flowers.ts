/*
 * @lc app=leetcode id=605 lang=typescript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (flowerbed.length === 0) return false;

  let zero_count = flowerbed[0] === 0 ? 1 : 0;
  let plots = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) zero_count++;
    else if (zero_count > 0) {
      plots += Math.floor((zero_count - 1) / 2);
      zero_count = 0;
      if(plots >= n) return true
    }
  }

  if (zero_count >= 2) plots += Math.floor(zero_count / 2);

  return n <= plots;
}
// @lc code=end
