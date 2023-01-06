/*
 * @lc app=leetcode id=1523 lang=typescript
 *
 * [1523] Count Odd Numbers in an Interval Range
 */

// @lc code=start
function countOdds(low: number, high: number): number {
    let range: number = (high - low) + 1

    if (range % 2 === 1 && low % 2 === 1) {
        return Math.floor((range / 2) + 1)
    } else {
        return Math.floor((range / 2))
    }
};
// @lc code=end

