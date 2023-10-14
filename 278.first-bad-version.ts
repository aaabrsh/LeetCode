/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let l = 0;
    let r = n;

    let lastBad = n;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (isBadVersion(mid)) {
        lastBad = mid;
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    return lastBad;
  };
};
// @lc code=end
