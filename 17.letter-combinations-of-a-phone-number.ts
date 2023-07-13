/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const lookup: any = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  if (digits.length < 1) {
    return [];
  }

  //   let digitsArr: string[] = digits.split('');
  let response: string[] = [];

  for (let i = 0; i < digits.length; i++) {
    const char = digits[i];
    if (lookup[char]) {
      if (response.length == 0) {
        response.push(...lookup[char]);
      } else {
        response = produceCombinations(response, lookup[char]);
      }
    }
  }

  return response;
}

function produceCombinations(a: string[], b: string[]): string[] {
  let response: string[] = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      response.push(a[i] + b[j]);
    }
  }

  return response;
}

// @lc code=end
