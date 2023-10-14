/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let depth = 0;
  let maxDepth = 0;

  const traverse = (root: TreeNode | null) => {
    depth++;
    maxDepth = Math.max(maxDepth, depth);
    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
    depth--;
  };

  traverse(root);

  return maxDepth;
}
// @lc code=end
