/*
 * @lc app=leetcode id=18 lang=typescript
 *
 * [18] 4Sum
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  nums = nums.sort((a, b) => a - b);

  const res: number[][] = [];

  for (let i = 0; i <= nums.length - 4; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      // skip duplicate numbers
      continue;
    }

    for (let j = i + 1; j <= nums.length - 3; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        // skip duplicate numbers
        continue;
      }

      let l = j + 1;
      let r = nums.length - 1;

      while (l < r) {
        if (l > j + 1 && nums[l] === nums[l - 1]) {
          // skip duplicate numbers
          l++;
          continue;
        }

        let sum = nums[i] + nums[j] + nums[l] + nums[r];

        if (sum > target) {
          r--;
        } else if (sum < target) {
          l++;
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          l++;
        }
      }
    }
  }

  return res;
}

// @lc code=end
