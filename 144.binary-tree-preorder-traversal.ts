/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
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

function preorderTraversal(root: TreeNode | null): number[] {
  // follows depth first search traversal
  if (!root) {
    return [];
  }

  const res: number[] = [];

  const dfs = (root: TreeNode) => {
    if (root.val != null) {
      res.push(root.val);
    }

    if (root.left) dfs(root.left);
    if (root.right) dfs(root.right);
  };

  dfs(root);

  return res;
}
// @lc code=end
