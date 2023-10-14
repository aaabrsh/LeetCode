/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const top = stack.pop();

    if (top.val === targetSum && !top.left && !top.right) return true;

    if (top.right) {
      top.right.val = top.right.val + top.val;
      stack.push(top.right);
    }
    if (top.left) {
      top.left.val = top.left.val + top.val;
      stack.push(top.left);
    }
  }

  return false;
}
// @lc code=end
