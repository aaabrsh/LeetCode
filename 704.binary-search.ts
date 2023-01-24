/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {

    let firstIndex: number = 0;
    let lastIndex: number = nums.length - 1;

    for (let i: number = 0; i < nums.length; i++) {
        const middleIndex = Math.floor((firstIndex + lastIndex) / 2)
        if (nums[middleIndex] === target) {
            return middleIndex;
        }

        if (nums[middleIndex] > target) {
            lastIndex = middleIndex - 1;
        } else {
            firstIndex = middleIndex + 1
        }
    }

    return -1;
};
// @lc code=end

