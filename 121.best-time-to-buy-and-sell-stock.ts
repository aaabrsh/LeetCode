/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let l = 0;
  let r = 1;
  let profit = 0;

  while (r < prices.length) {
    if (prices[l] > prices[r]) {
      l = r;
      r++;
      continue;
    }

    const diff = prices[r] - prices[l];
    if (profit < diff) {
      profit = diff;
    }

    r++;
  }

  return profit;
}
// @lc code=end
