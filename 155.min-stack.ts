/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
  minStack: number[] = [];
  stack: number[] = [];
  constructor() {}

  push(val: number): void {
    this.stack.push(val);
    let temp: number[] = [];
    if (
      val < this.minStack[this.minStack.length - 1] ||
      this.minStack.length === 0
    ) {
      this.minStack.push(val);
    } else {
      // repeat the min value so that when pop() is called, the min value is not lost
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
