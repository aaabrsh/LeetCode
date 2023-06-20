/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  console.log(nums);

  let response: any = [];

  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    const num = nums[i];
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      console.log("indexes are ", i, l, r);
      console.log("values are ", num, nums[l], nums[r]);

      const sum = num + nums[l] + nums[r];
      if (sum === 0) {
        let candidate = [num, nums[l], nums[r]];
        // check for duplicates
        let matchFound = response.some(
          (element: any) =>
            JSON.stringify(element) === JSON.stringify(candidate)
        );

        if (!matchFound) response.push(candidate);
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return response;
}
// @lc code=end
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([12,-8,7,2,-15,8,8,-8,-14,-4,-5,7,9,11,-4,-15,-6,1,-14,4,3,10,-5,2,1,6,11,2,-2,-5,-7,-6,2,-15,11,-6,8,-4,2,1,-1,4,-6,-15,1,5,-15,10,14,9,-8,-6,4,-6,11,12,-15,7,-1,-9,9,-1,0,-4,-1,-12,-2,14,-9,7,0,-3,-4,1,-2,12,14,-10,0,5,14,-1,14,3,8,10,-8,8,-5,-2,6,-11,12,13,-7,-12,8,6,-13,14,-2,-5,-11,1,3,-6]));
