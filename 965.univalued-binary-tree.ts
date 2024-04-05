/*
 * @lc app=leetcode id=965 lang=typescript
 *
 * [965] Univalued Binary Tree
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

function isUnivalTree(root: TreeNode | null): boolean {
  if (!root) return true;

  const queue: TreeNode[] = [root];
  const num = root.val;

  while (queue.length) {
    const top = queue.shift();
    if (top && top.val !== num) {
      return false;
    }

    if (top.left) queue.push(top.left);
    if (top.right) queue.push(top.right);
  }

  return true;
}
// @lc code=end
