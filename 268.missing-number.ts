/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  // adding all the numbers and the expected numbers and finding the difference
  let sum = 0;
  let expectedSum = nums.length;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    expectedSum += i;
  }

  return expectedSum - sum;
}

/*******************FIRST SOLUTION *******************/
// first sort and the search the missing number
// function firstSolution(nums: number[]): number {
//   nums = nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     if (i !== nums[i]) {
//       return i;
//     }
//   }

//   return nums.length;
// }
// @lc code=end
