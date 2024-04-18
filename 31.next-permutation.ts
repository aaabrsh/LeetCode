/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length === 0) return;

  /**
   * 1. find the point where the array goes from increasing to decreasing starting from the end (break-point)
   * 2. find the first number from the end that is higher than the number at the breakpoint
   * 3. swap the abve two numbers
   * 4. sort the array that is after the break point
   */

  // 1. find break-point
  let break_point = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      break_point = i;
      break;
    }
  }

  // if the number is reverse sorted
  if (break_point === -1) {
    nums.reverse();
    return;
  }

  // 2. find the first number higher than the break-point number starting from the end
  let next_higher = nums.length - 1;
  for (let i = nums.length - 1; i > break_point; i--) {
    if (nums[i] > nums[break_point]) {
      next_higher = i;
      break;
    }
  }

  // 3. swap the number at the break-point with the number at the next_higher point
  const temp = nums[break_point];
  nums[break_point] = nums[next_higher];
  nums[next_higher] = temp;

  // 4. sort the numbers after the break-point using insertion sort
  for (let i = break_point + 2; i < nums.length; i++) {
    const cur = nums[i];
    let j = i - 1;

    while (j >= break_point + 1 && nums[j] > cur) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = cur;
  }
}

// @lc code=end
