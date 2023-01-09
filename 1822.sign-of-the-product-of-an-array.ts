/*
 * @lc app=leetcode id=1822 lang=typescript
 *
 * [1822] Sign of the Product of an Array
 */

// @lc code=start
function arraySign(nums: number[]): number {
    let output: number = 1;
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            return 0;
        }
        else if (nums[i] < 0) {
            output *= -1;
        }
    }

    return output;

};
// @lc code=end