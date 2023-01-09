/*
 * @lc app=leetcode id=1502 lang=typescript
 *
 * [1502] Can Make Arithmetic Progression From Sequence
 */

// @lc code=start
function canMakeArithmeticProgression(arr: number[]): boolean {
    arr = arr.sort((a, b) => { return a - b });

    for (let i: number = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] != arr[i] - arr[i - 1]) {
            return false;
        }
    }

    return true;
};
// @lc code=end

