/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  /*******************FIRST SOLUTION *******************/
  // nested loop
  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = i + 1; j < numbers.length; j++) {
  //     if (numbers[i] + numbers[j] > target) break;
  //     else if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
  //   }
  // }
  // return [];

  /*******************SECOND SOLUTION *******************/
  // using two pointers
  let l = 0;
  let r = numbers.length - 1;
  while (numbers[l] + numbers[r] !== target) {
    if (numbers[l] + numbers[r] > target) {
      r--;
    } else {
      l++;
    }
  }

  return [l + 1, r + 1];
}
// @lc code=end
