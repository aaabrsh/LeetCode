/*
 * @lc app=leetcode id=724 lang=typescript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
  // create a new array where each element is the sum of all the numbers before it
  const newArr = new Array(nums.length);

  newArr[0] = 0;
  for (let i = 1; i < newArr.length; i++) {
    newArr[i] = newArr[i - 1] + nums[i - 1];
  }

  // the sum of all the numbers in nums
  const sum = newArr[newArr.length - 1] + nums[nums.length - 1];

  for (let i = 0; i < newArr.length; i++) {
    let num = sum - nums[i]; // gives the sum of all the numbers except the current one
    num = num / 2; // gives the number that should be the sum on both the left and right sides so that the current index is considered pivot index

    if (newArr[i] === num || (num === 0 && newArr[i - 1] === undefined)) {
      return i;
    }
  }

  return -1;
}
// @lc code=end
