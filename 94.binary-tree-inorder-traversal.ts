/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function inorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];

  const traverse = (root: TreeNode | null) => {
    if (!root) return;

    if (root.left) {
      traverse(root.left);
    }

    res.push(root.val);

    if (root.right) {
      traverse(root.right);
    }
  };

  traverse(root);

  return res;
}
// @lc code=end
