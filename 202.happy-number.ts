/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {

    let checkedDigits: number[] = [n];
    while (true) {
        let next = sumOfSquaresOfDigits(checkedDigits[checkedDigits.length - 1]);
        if (next === 1) {
            return true;
        } else if (checkedDigits.includes(next)) {
            return false;
        } else {
            checkedDigits.push(next);
        }
    }

};

function sumOfSquaresOfDigits(num: number): number {
    let output: number = 0;
    while (num > 0) {
        output += Math.pow(num % 10, 2);
        num = Math.floor(num / 10);
    }

    return output;
}
// @lc code=end

