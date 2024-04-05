/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start

function sortedSquares(nums: number[]): number[] {
  // using two pointers

  let l = 0;
  let r = nums.length - 1;

  const res: number[] = [];

  while (l <= r) {
    const num1 = nums[l] * nums[l];
    const num2 = nums[r] * nums[r];

    if (num1 >= num2) {
      res.unshift(num1);
      l++;
    } else {
      res.unshift(num2);
      r--;
    }
  }

  return res;
}

// /*******************SECOND SOLUTION *******************/
// function sortedSquares(nums: number[]): number[] {
//   // without using built in sorting method

//   // put the squares of the negative and positive numbers separately, and them merge them later
//   let neg_squares: number[] = [];
//   let pos_squares: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= 0) {
//       pos_squares.push(nums[i] * nums[i]);
//     } else {
//       neg_squares.unshift(nums[i] * nums[i]);
//     }
//   }

//   const sorted: number[] = [];

//   while (neg_squares.length || pos_squares.length) {
//     if (pos_squares.length && !neg_squares.length) {
//       sorted.push(pos_squares.shift() as number);
//     } else if (!pos_squares.length && neg_squares.length) {
//       sorted.push(neg_squares.shift() as number);
//     } else {
//       if (pos_squares[0] <= neg_squares[0]) {
//         sorted.push(pos_squares.shift() as number);
//       } else {
//         sorted.push(neg_squares.shift() as number);
//       }
//     }
//   }

//   return sorted;
// }

// /*******************FIRST SOLUTION *******************/
// function sortedSquares(nums: number[]): number[] {
//   // using sorting
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] * nums[i];
//   }

//   return nums.sort((a, b) => a - b);
// }
// @lc code=end
