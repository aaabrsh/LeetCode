/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(height: number[]): number {
  let count = 0;
  let l = 0;
  let r = 0;

  while (l < height.length - 1) {
    let localMax = -1;
    let temp = 0;
    if (l === r) {
      localMax = -1;
      r++;
    }

    while (r < height.length) {
      if (height[r] < height[l]) {
        temp += height[l] - height[r];
        localMax = Math.max(localMax, height[r]);
        r++;
      } else {
        count += temp;
        temp = 0;
        l = r;
        break;
      }
    }

    if (r >= height.length) {
      if (localMax === 0 || localMax === -1) {
        return count;
      }

      if (l < height.length - 1) {
        height[l] = localMax;
        temp = 0;
        r = l;
      } else {
        return count;
      }
    }
  }

  return count;
}
// @lc code=end
