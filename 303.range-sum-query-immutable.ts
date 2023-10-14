/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {
  nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(left: number, right: number): number {
    let sum = this.nums[right];
    for (let i = left; i < right; i++) {
      sum += this.nums[i];
    }

    return sum;
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
