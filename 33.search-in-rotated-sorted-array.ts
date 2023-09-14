/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
function search(nums: number[], target: number): number {
  // implement binary search and check if target is in the range of (l-m) or (m-r) on each iteration
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    }

    let max = Math.max(nums[m] > nums[l] ? nums[l] : nums[r], nums[m]);
    let min = Math.min(nums[m] > nums[l] ? nums[l] : nums[r], nums[m]);

    if (nums[m] > nums[l]) {
      if (target >= min && target <= max) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target >= min && target <= max) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
}

/*******************FIRST SOLUTION *******************/
// first find by how much the array has shifted, and then use that info to do a binary search
// function firstSolution(nums: number[], target: number): number {
//   const lastIndex = nums.length - 1;
//   const length = nums.length;
//   let l = 1;
//   let r = lastIndex;

//   // find by how much the array has shifted
//   while (l <= r && length > 1) {
//     let m = Math.floor((l + r) / 2);
//     if (nums[m] > nums[0]) {
//       l = m + 1;
//     } else if (nums[m] < nums[0]) {
//       r = m - 1;
//     } else {
//       break;
//     }
//   }

//   const shift = nums[l] > nums[r] ? r : l;

//   function getShifted(index: number) {
//     const sum = index + shift;
//     return sum <= lastIndex ? sum : sum - length;
//   }

//   l = 0;
//   r = lastIndex;

//   if (l === r && nums[l] === target) {
//     return l;
//   }

//   while (l <= r) {
//     let m = Math.floor((l + r) / 2);
//     if (nums[getShifted(m)] > target) {
//       r = m - 1;
//     } else if (nums[getShifted(m)] < target) {
//       l = m + 1;
//     } else {
//       return getShifted(m);
//     }
//   }

//   return -1;
// }

// @lc code=end
