/*
 * @lc app=leetcode id=81 lang=typescript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start

function search(nums: number[], target: number): boolean {
  // the problem wants us to use binary search
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] === target) return true;

    if (nums[l] === nums[m] && nums[m] === nums[r]) {
      /**
       * if numbers at l, m, and r are the same, we can't tell
       * where the pivot index is. move l and r by one point and go
       * to the next iteration
       */
      l++;
      r--;
      continue;
    }

    // check whether the rotation pivot is in the left or right subarray
    if (nums[l] > nums[m]) {
      // the pivot index is on the left and the right is sorted
      if (nums[m] < target && target <= nums[r])
        l = m + 1; // target is between m & r
      else r = m - 1;
    } else {
      // the pivot index is on the right and the left is sorted
      if (nums[l] <= target && target < nums[m])
        r = m - 1; // target is between l & m
      else l = m + 1;
    }
  }

  return false;
}

// // Simple solution
// function search(nums: number[], target: number): boolean {
//   return nums.includes(target);
// }
// @lc code=end
