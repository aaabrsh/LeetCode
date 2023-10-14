/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  } else if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }

  let m = Math.floor((nums.length - 1) / 2);
  let root = new TreeNode(
    nums[m],
    sortedArrayToBST(nums.slice(0, m)),
    sortedArrayToBST(nums.slice(m + 1))
  );

  return root;
}
// @lc code=end
