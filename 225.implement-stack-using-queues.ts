/*
 * @lc app=leetcode id=225 lang=typescript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
class MyStack {
  queue: number[];
  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    const temp: number[] = [];

    while (this.queue.length > 0) {
      temp.push(this.queue.pop() as number);
    }

    this.queue.push(x);

    while (temp.length > 0) {
      this.queue.push(temp.pop() as number);
    }
  }

  pop(): number {
    return this.queue.shift() as number;
  }

  top(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
