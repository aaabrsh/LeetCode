/*
 * @lc app=leetcode id=1790 lang=typescript
 *
 * [1790] Check if One String Swap Can Make Strings Equal
 */

// @lc code=start
function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) {
        return true;
    }

    if (s1.split("").sort().join("") != s2.split("").sort().join("")) {
        //sort the two strings and check if they are different
        return false;
    }

    let mismatchCounter = 0;

    for (let i: number = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) {
            mismatchCounter++;
            if (mismatchCounter > 2) {
                //if there are morethan 2 mismatches, then the two strings arenot almost equal
                return false;
            }
            let temp = s1.indexOf(s2[i], i + 1);
            let secondIndex = temp != -1 ? temp : i + 1;//i+1 because when assigning secondIndex to i we do secondIndex-1
            if (secondIndex == -1 || s1.slice(i + 1, secondIndex) != s2.slice(i + 1, secondIndex)) {
                //check if the substring that is between the current index and the next mismatch is different from the same substring on the second string
                return false;
            } else {
                //jump to the next mismatch, leave all that is in between
                i = secondIndex - 1;//the loop adds "i++" so here we subtract one
            }
        }
    }

    return true;
};
// @lc code=end
