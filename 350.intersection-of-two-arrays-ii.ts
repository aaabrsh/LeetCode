/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const res: number[] = [];
  const short = nums1.length < nums2.length ? nums1 : nums2;
  const long = nums1.length < nums2.length ? nums2 : nums1;

  for (let i = 0; i < short.length; i++) {
    const matchIndex = long.indexOf(short[i]);
    if (matchIndex != -1) {
      long.splice(matchIndex, 1);
      res.push(short[i]);
    }
  }

  return res;
}
// @lc code=end
