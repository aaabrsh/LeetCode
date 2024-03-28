/*
 * @lc app=leetcode id=287 lang=typescript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  // Floyd's algorithm with a fast and slow pointers
  // the numbers in the array are treated as a pointer (therefore the array itself is like a linked-list with a cycle in it)
  let fast = 0;
  let slow = 0;

  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];
    if (fast === slow) break;
  }

  let slow2 = 0;
  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];

    if (slow === slow2) break;
  }

  return slow;
}
// @lc code=end
