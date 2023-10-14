/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let nums1Copy: number[] = [...nums1];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m || j < n) {
    if (i >= m) {
      nums1[k] = nums2[j];
      j++;
    } else {
      if (nums1Copy[i] > nums2[j]) {
        nums1[k] = nums2[j];
        j++;
      } else {
        nums1[k] = nums1Copy[i];
        i++;
      }
    }

    k++;
  }
}
// @lc code=end
