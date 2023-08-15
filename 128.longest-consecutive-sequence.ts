/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  //   // use insertion sort to sort the array
  //   for (let i = 1; i < nums.length; i++) {
  //     const temp = nums[i];
  //     for (let j = i; j >= 0 && temp < nums[j - 1]; j--) {
  //       nums[j] = nums[j] + nums[j - 1];
  //       nums[j - 1] = nums[j] - nums[j - 1];
  //       nums[j] = nums[j] - nums[j - 1];
  //     }
  //   }
  nums = nums.sort((a, b) => {
    return a - b;
  });

  let longest = 0;
  let consequetive = 1;
  for (let i = 0; i < nums.length; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];

    if (prev === curr) {
      continue;
    }

    // can't do just if(prev && curr === prev + 1) because if prev===0, it returns false
    if (prev !== null && curr === prev + 1) {
      consequetive++;
    } else {
      consequetive = 1;
    }

    if (consequetive > longest) {
      longest = consequetive;
    }
  }

  return longest;
}
// @lc code=end
