/*
 * @lc app=leetcode id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */

function sortColors(nums: number[]): void {
  // using two pointers since we have only three values in the array
  let r = nums.length - 1;
  let l = 0;
  let m = 0;

  const swap = (a: number, b: number) => {
    if (a === b) return;
    nums[a] = nums[a] + nums[b];
    nums[b] = nums[a] - nums[b];
    nums[a] = nums[a] - nums[b];
  };

  while (m <= r) {
    if (nums[m] === 1) m++;
    else if (nums[m] === 0) {
      swap(l, m);
      l++;
      m++;
    } else {
      // nums[m] === 2
      swap(m, r);
      r--;
    }
  }
}

/*******************FIRST SOLUTION *******************/
// function sortColors(nums: number[]): void {
//   // use insertion sort
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (nums[j - 1] > nums[j]) {
//         // swap
//         nums[j] = nums[j] + nums[j - 1];
//         nums[j - 1] = nums[j] - nums[j - 1];
//         nums[j] = nums[j] - nums[j - 1];
//       } else {
//         break;
//       }
//     }
//   }
// }
// @lc code=end
