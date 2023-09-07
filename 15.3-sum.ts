/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  const res: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        // ignore duplicate values for 'l'
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return res;
}

/*******************FIRST SOLUTION *******************/
// slower solution
// function firstSolution(nums: number[]): number[][] {
//   const res: number[][] = [];
//   let l = 0;
//   let r = nums.length - 1;
//   let triplets: any = {};
//   while (nums[l] < 1 && r > l + 1) {
//     if (nums[l] === nums[l - 1]) {
//       r = nums.length - 1;
//       l++;
//       continue;
//     }

//     for (let m = l + 1; m < r; m++) {
//       if (nums[l] + nums[m] + nums[r] === 0) {
//         let key = [nums[l], nums[m], nums[r]].sort().join(",");
//         if (!triplets[key]) {
//           res.push([nums[l], nums[m], nums[r]]);
//           triplets[key] = true;
//         }
//         break;
//       } else if (nums[l] + nums[m] + nums[r] > 0) {
//         break;
//       } else if (nums[l] === nums[m] && nums[m] === nums[r]) {
//         return res;
//       }
//     }

//     r--;
//     if (r === l + 1 || nums[r] < 0) {
//       r = nums.length - 1;
//       l++;
//     }
//   }

//   return res;
// }
// @lc code=end
