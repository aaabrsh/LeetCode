/*
 * @lc app=leetcode id=1281 lang=typescript
 *
 * [1281] Subtract the Product and Sum of Digits of an Integer
 */

// @lc code=start
function subtractProductAndSum(n: number): number {
    let product: number = 1;
    let sum: number = 0;

    while (n > 0) {//take single digit and use it for product and sum
        let reminder: number = n % 10;
        product *= reminder;
        sum += reminder;
        n = Math.floor(n / 10);
    }

    return product - sum;

};
// @lc code=end

