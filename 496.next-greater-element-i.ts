/*
 * @lc app=leetcode id=496 lang=typescript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const response: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    const num1 = nums1[i];
    let findingNext = false;
    let greaterFound = false;

    for (let j = 0; j < nums2.length; j++) {
      const num2 = nums2[j];

      if (findingNext && num2 > num1) {
        response.push(num2);
        greaterFound = true;
        break;
      }

      if (num2 === num1) {
        findingNext = true;
      }
    }

    if (!greaterFound) response.push(-1);
  }

  return response;
}
// @lc code=end
