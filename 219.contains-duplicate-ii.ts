/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // O(n) solution using hashmap
  const hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - hashmap.get(nums[i]) <= k) {
      return true;
    }

    hashmap.set(nums[i], i);
  }

  return false;
}

/*******************FIRST SOLUTION *******************/
// O(n^2) Solution
// function firstSolution(nums: number[], k: number): boolean {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j] && j - i <= k) {
//         return true;
//       }
//     }
//   }

//   return false;
// }
// @lc code=end
