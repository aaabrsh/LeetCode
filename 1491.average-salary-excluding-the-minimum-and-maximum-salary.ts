/*
 * @lc app=leetcode id=1491 lang=typescript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 */

// @lc code=start
function average(salary: number[]): number {
    salary.sort(function (a, b) { return a - b });
    //sort() normally treats the array as string that is why we need function(a, b){return a - b}. for reverse array use function(a, b){return b - a}

    let sum = 0;

    for (let i: number = 1; i < salary.length - 1; i++) {
        sum += salary[i];
    }

    return sum / (salary.length - 2)
};
// @lc code=end

