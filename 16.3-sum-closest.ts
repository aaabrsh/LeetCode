/*
 * @lc app=leetcode id=16 lang=typescript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b);

  let closest = Infinity;
  let closest_sum = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum === target) return sum;

      let abs_distance = Math.abs(sum - target);

      if (abs_distance < closest) {
        closest = abs_distance;
        closest_sum = sum;
      }

      if (sum > target) {
        r--;
      } else {
        l++;
      }
    }
  }

  return closest_sum;
}
// @lc code=end
