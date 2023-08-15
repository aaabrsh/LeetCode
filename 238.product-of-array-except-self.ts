/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  /**
   * The solution can be found using suffix and prefix arrays
   *    - prefix[i] contains the product of all the numbers from num[0] to num[i - 1].
   *    - suffix[i] contains the product of all the numbers from num[i + 1] to num[n], where n is the last element of num.
   *    - Then, the productExceptSelf[i] can be found by multiplying prefix[i] and suffix[i]. i.e ans[i] = prefix[i] * suffix[i].
   * By doing the above, we can implement the code in O(n) time and without using the division operator(which becomes a problem when nums array contains 0)
   */
  let pre: number[] = [1];
  let suff: number[] = [];
  suff[nums.length - 1] = 1;
  for (let i = 1; i < nums.length; i++) {
    pre[i] = pre[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    suff[i] = suff[i + 1] * nums[i + 1];
  }

  let response: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    response[i] = pre[i] * suff[i];
  }
  return response;
}
// @lc code=end
