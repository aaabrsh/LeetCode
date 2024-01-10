/*
 * @lc app=leetcode id=492 lang=typescript
 *
 * [492] Construct the Rectangle
 */

// @lc code=start
function constructRectangle(area: number): number[] {
  let response: number[] = [];

  // get the factors of the area
  const factors = getFactors(area);

  response = [factors[0][0], factors[0][1]];
  let responseDifference = factors[0][0] - factors[0][1];

  // find the smallest from the factors
  for (let i = 1; i < factors.length; i++) {
    if (factors[i][0] < factors[i][1]) continue;

    const diff = factors[i][0] - factors[i][1];

    if (diff < responseDifference) {
      response = [factors[i][0], factors[i][1]];
      responseDifference = diff;
    }
  }

  return response;
}

function getFactors(area: number): number[][] {
  const res: number[][] = [];
  for (let i = 2; i <= area / 2; i++) {
    if (area % i === 0) res.push([area / i, i]);
  }

  res.push([area, 1]);

  return res;
}

/*******************SECOND SOLUTION *******************/
// function constructRectangle(area: number): number[] {
//   const root = Math.floor(Math.sqrt(area));

//   if (root * root === area) return [root, root];

//   const startToRoot = root;
//   const endToRoot = area - root;

//   let loopStart = 0;
//   let loopEnd = root;
//   if (endToRoot > startToRoot) {
//     loopStart = root;
//     loopEnd = area;
//   }

//   for (let i = loopStart; i < loopEnd; i++) {
//     if (area % i === 0) {
//       const num = area / i;
//       if (num > i) return [num, i];
//       else return [i, num];
//     }
//   }

//   return [area, 1];
// }
// @lc code=end
