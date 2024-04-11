/*
 * @lc app=leetcode id=680 lang=typescript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;
  let lastSkip: number[] = [];
  let lastRun = false;

  while (l < r) {
    if (s[l] !== s[r]) {
      if (lastRun) return false;
      else if (lastSkip.length) {
        // go back to the index of the letter we skipped before and try to skip the one on the right instead
        lastRun = true;
        [l, r] = lastSkip;
      }

      if (s[l + 1] === s[r] && !lastSkip.length) {
        /**
         * we make a copy of the current l & r indices so that
         * if skipping the letter on the left doesn't fix the problem
         * and there is a mismatch down the line, then we reset to this
         * index and we can try skipping the letter on the right instead.
         * To make sure we only do this once, we have a lastRun variable
         * and we set it to true when we apply the copies we are taking now.
         *  */
        lastSkip = [l, r];
        l++;
      } else if (s[l] === s[r - 1]) {
        /** we don't need to keep copy of indices as we did for the above if case
         * because we are already here because either
         * 1. s[l + 1] === s[r] is false and that means skippling the left letter doesn't fix the problem
         * 2. lastSkip already have a value which indicates we have already tried skipping the left and we are here on our second run
         */
        r--;
        lastRun = true;
      } else {
        return false;
      }
    } else {
      // the letetr on the right and left match
      l++;
      r--;
    }
  }

  return true;
}

// @lc code=end
