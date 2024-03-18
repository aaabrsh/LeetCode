/*
 * @lc app=leetcode id=530 lang=typescript
 *
 * [530] Minimum Absolute Difference in BST
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

function getMinimumDifference(root: TreeNode | null): number {
  const explored: number[] = [];
  let min: number | undefined = undefined;

  const traverse = (node: TreeNode) => {
    // check difference from explored nodes
    for (let val of explored) {
      const diff = Math.abs(node.val - val);
      if (min === undefined) {
        min = diff;
      } else {
        min = Math.min(diff, min);
      }
    }

    explored.push(node.val);

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(root);

  return min !== undefined ? min : root.val;
}
// @lc code=end
