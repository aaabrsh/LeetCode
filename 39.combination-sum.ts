/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  candidates = candidates.sort((a, b) => a - b);

  let all_candidates: number[] = [];
  candidates.forEach((num, i) => {
    // run the repeatNumber function for unique numbers
    if (num !== candidates[i - 1]) {
      // repeat the numbers that need to be repeated
      all_candidates.push(...repeatNumber(num, target));
    }
  });

  const combinations: number[][] = [];

  //  build the combinations and for each combination, check if the sum is equal to target
  const buildCombinations = (
    iteration: number,
    start: number = 0,
    combination: number[] = [],
    sum: number = 0
  ) => {
    if (iteration === 0) {
      return;
    }

    for (let i = start; i < all_candidates.length; i++) {
      if (i > start && all_candidates[i] === all_candidates[i - 1]) continue; // to avoid duplicate checking skip the numbers that are the same as the previous number

      const temp = [...combination, all_candidates[i]].sort((a, b) => a - b);

      let newSum = sum + all_candidates[i];

      if (newSum === target) {
        combinations.push(temp);
        return;
      } else if (newSum < target) {
        buildCombinations(iteration - 1, i + 1, temp, newSum);
      } else {
        return;
      }
    }
  };

  buildCombinations(all_candidates.length);

  return combinations;
}

// repeat numbers as long as their sum is less than the target
function repeatNumber(num: number, target: number): number[] {
  const quotient = Math.floor(target / num);
  const res: number[] = new Array(quotient).fill(num);

  return res;
}

// @lc code=end
