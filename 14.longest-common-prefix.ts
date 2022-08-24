/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {

    let shortest : number  = 0;
    for (let i = 0; i < strs.length; i++) {
        if(i == 0){
            shortest = strs[0].length;
        }else if (shortest > strs[i].length){
            shortest = strs[i].length;
        }
    }

    let substr = "";
    for (let i = 0; i < shortest; i++) {
        let x = true;
        for (let j = 1; j < strs.length; j++) {
            if(strs[0][i] == strs[j][i]){
                x = true;
            }
            else{
                x = false;
                break;
            }
        }
        if(!x)
            break;
        substr += strs[0][i];
    }

    return substr;
};
// @lc code=end

