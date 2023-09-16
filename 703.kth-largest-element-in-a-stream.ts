/*
 * @lc app=leetcode id=703 lang=typescript
 *
 * [703] Kth Largest Element in a Stream
 */

// @lc code=start
class KthLargest {
  nums: number[];
  kth_stack: number[];
  k: number;

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a);
    this.kth_stack = this.nums.slice(0, k);
  }

  add(val: number): number {
    // find a place for val in the kth_stack array
    const popped: number[] = [];
    while (this.kth_stack.length > 0) {
      const temp = this.kth_stack[this.kth_stack.length - 1];
      if (temp !== undefined && temp >= val) {
        break;
      } else {
        popped.push(temp);
        this.kth_stack.pop();
      }
    }

    popped.push(val);
    const diff = this.kth_stack.length - this.k;
    if (diff < 0) {
      this.kth_stack.push(...popped.slice(diff).reverse());
    }

    return this.kth_stack[this.kth_stack.length - 1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
