/*
 * @lc app=leetcode id=653 lang=typescript
 *
 * [653] Two Sum IV - Input is a BST
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

function findTarget(root: TreeNode | null, k: number): boolean {
  const stack: TreeNode[] = [root];
  const required: { [key: number]: boolean } = {};

  while (stack.length) {
    const top = stack.pop();

    if (required[top.val]) return true;

    required[k - top.val] = true;

    if (top.right) stack.push(top.right);
    if (top.left) stack.push(top.left);
  }

  return false;
}
// @lc code=end
