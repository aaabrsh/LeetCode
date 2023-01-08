/*
 * @lc app=leetcode id=976 lang=typescript
 *
 * [976] Largest Perimeter Triangle
 */

// @lc code=start
function largestPerimeter(nums: number[]): number {
    //For a valid triangle the sum of the two sides must be greater than the third side

    const sortedNums: number[] = nums.sort(function (a, b) { return b - a });

    //pointers for the index of the three sides in the sortedNums array
    let x: number = 0;
    let y: number = 1;
    let z: number = 2;

    while (x < sortedNums.length - 2) {
        if (sortedNums[x] + sortedNums[y] > sortedNums[z] &&
            sortedNums[x] + sortedNums[z] > sortedNums[y] &&
            sortedNums[y] + sortedNums[z] > sortedNums[x]) {//check if the three sides make a valid triangle
            return sortedNums[x] + sortedNums[y] + sortedNums[z]//return the perimeter
        }

        z++;
        if (z == sortedNums.length) {//if z is currently on the last element, move y and reset z to y+1
            y++;
            z = y + 1;
            if (y == sortedNums.length - 1) {//if y is currently on the second last element, move x and reset y to x+1
                x++;
                y = x + 1;
                z = y + 1;
            }
        }
    }

    return 0;
};
// @lc code=end

