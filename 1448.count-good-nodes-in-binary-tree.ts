/*
 * @lc app=leetcode id=1448 lang=typescript
 *
 * [1448] Count Good Nodes in Binary Tree
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

function goodNodes(root: TreeNode | null): number {
  const dfs = (node: TreeNode, max: number): number => {
    let count = 0;
    if (node.val >= max) count++;

    if (node.left) count += dfs(node.left, Math.max(max, node.left.val));
    if (node.right) count += dfs(node.right, Math.max(max, node.right.val));

    return count;
  };

  return root ? dfs(root, root.val) : 0;
}
// @lc code=end
