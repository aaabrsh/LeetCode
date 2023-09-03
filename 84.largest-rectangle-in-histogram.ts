/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  /*******************SECOND SOLUTION *******************/
  /**
   * The maximum area constructed from consequetive heights that have increasing or equal height
   * If the heights are increasing/equal, the area is smallest height * number of increasing/equal bars
   * 
   */
  let maxArea = 0;
  let stack: number[][] = []; // store [index, height]
  let i = 0;
  let start = 0;
  do {
    if (stack.length === 0) {
      stack.push([start, heights[i]]);
      i++;
      start = i;
      continue;
    }

    if (i >= heights.length) {
      // pop remaining values in the stack
      const area = getArea(stack.pop()!, heights.length);
      if (area > maxArea) {
        maxArea = area;
      }
      continue;
    }

    if (heights[i] >= stack[stack.length - 1][1]) {
      stack.push([start, heights[i]]);
      i++;
      start = i;
    } else {
      start = stack[stack.length - 1][0];
      const area = getArea(stack.pop()!, i);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  } while (stack.length > 0 || i < heights.length);

  return maxArea;
}

function getArea(element: number[], index: number) {
  const lastIndex = element[0];
  const lastHeight = element[1];
  const indexDiff = index - lastIndex;
  const area = lastHeight * indexDiff;

  return area;
}
// @lc code=end

/*******************FIRST SOLUTION *******************/
// function firstSolution(heights: number[]): number {
//   // Brute force - but it exceeds the time limit
//   let maxArea = 0;
//   for (let i = 0; i < heights.length; i++) {
//     let min = heights[i];
//     if (heights[i] * (heights.length - i) < maxArea) continue;
//     for (let j = i; j < heights.length; j++) {
//       const ele = heights[j];
//       if (ele < min) min = ele;
//       let area = min * (j - i + 1);
//       if (area > maxArea) maxArea = area;
//     }
//   }

//   return maxArea;
// }
