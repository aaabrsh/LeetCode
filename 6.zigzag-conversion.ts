/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
    let zigZag: any[] = [];
    for (let i = 0; i < numRows; i++) {
        zigZag.push("");
    }

    let forward: boolean = true;
    let index: number = 0;
    for (let i = 0; i < s.length; i++) {
        zigZag[index] += s[i];
        if (forward) {
            if (index === numRows - 1) {
                index = index-1 < 0 ? 0 : index - 1;//make sure it doesn't go into negative values
                forward = false;
                continue;
            }
            index++;
        } else {
            if (index === 0) {
                index = index + 1 >= numRows ? 0 : index + 1;//make sure it doesn't exceed numRows
                forward = true;
                continue;
            }
            index--;
        }
    }

    let response: string = zigZag.join("");

    return response;
};
// @lc code=end

