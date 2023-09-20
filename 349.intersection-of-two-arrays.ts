/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);

  const res: number[] = [];
  const short = nums1.length < nums2.length ? nums1 : nums2;
  const long = nums1.length < nums2.length ? nums2 : nums1;

  for (let i = 0; i < short.length; i++) {
    if (short[i] === short[i - 1]) {
      continue;
    }
    const matchIndex = long.indexOf(short[i]);
    if (matchIndex != -1) {
      res.push(short[i]);
    }
  }

  return res;
}
// @lc code=end
