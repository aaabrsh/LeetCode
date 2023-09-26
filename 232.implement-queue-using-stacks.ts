/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class MyQueue {
  queue: number[];
  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    let temp: number[] = [];
    while (this.queue.length > 0) {
      temp.push(this.queue.pop() as number);
    }

    this.queue.push(x);

    while (temp.length > 0) {
      this.queue.push(temp.pop() as number);
    }
  }

  pop(): number {
    return this.queue.pop() as number;
  }

  peek(): number {
    return this.queue[this.queue.length - 1];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
