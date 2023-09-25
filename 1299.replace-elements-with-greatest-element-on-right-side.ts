/*
 * @lc app=leetcode id=1299 lang=typescript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
function replaceElements(arr: number[]): number[] {
  // loop from the end to start
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      let temp = max;
      max = arr[i];
      arr[i] = temp;
    } else {
      arr[i] = max;
    }
  }

  return arr;
}

/*******************FIRST SOLUTION *******************/
// nested loop
// function firstSolution(arr: number[]): number[] {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = -1;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         arr[i] = arr[j];
//       }
//     }
//   }

//   return arr;
// }
// @lc code=end
