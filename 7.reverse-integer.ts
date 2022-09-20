/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
        x = x * -1;
    }
    let reversed = parseInt(extractDigit(x).join(""));
    reversed = isNegative ? reversed * -1 : reversed
    return reversed > 0x7FFFFFFF || reversed < -0x7FFFFFFF  ? 0 : reversed;//check if reversed exceeds the 32-bit integer limit
};

function extractDigit(x: number): number[] {
    let temp = Math.floor(x / 10)
    if (temp === 0) {
        return [x % 10];
    } else {
        return [x % 10, ...extractDigit(temp)]
    }
}
// @lc code=end

