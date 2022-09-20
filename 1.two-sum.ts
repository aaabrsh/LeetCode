/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let output: number[] = [];
        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j< nums.length; j++){
                if(nums[i] + nums[j] == target){
                    output[0] = i;
                    output[1] = j;
                    return output;
                }
            }
        }
};
// @lc code=end

