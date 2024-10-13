/*
 * @lc app=leetcode id=239 lang=typescript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  // The question is to find the maximum number from each window and return an array of those max numbers

  let output: number[] = [];
  let dequeue: number[] = []; // a queue to hold index of the numbers of the window from the largest to the smallest number
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    while (dequeue.length && nums[r] > nums[dequeue[dequeue.length - 1]]) {
      dequeue.pop();
    }

    dequeue.push(r);

    if (l > dequeue[0]) dequeue.shift(); // remove indices from the dequeue which are out of the window

    if (r >= k - 1) {
      output.push(nums[dequeue[0]]);
      l++;
    }

    r++;
  }

  return output;
}
// @lc code=end
