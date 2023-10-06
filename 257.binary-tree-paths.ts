/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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

function binaryTreePaths(root: TreeNode | null): string[] {
  let cur: TreeNode | null = root;
  let path: number[] = [];
  let response: string[] = [];

  function dfs(root) {
    path.push(root.val);

    root.left && dfs(root.left);
    root.right && dfs(root.right);

    if (!root.left && !root.right) {
      response.push(path.join("->"));
      path.pop();
      return;
    }

    path.pop();
  }

  dfs(cur);

  return response;
}
// @lc code=end
