/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  const queue: { node: TreeNode; min: number; max: number }[] = [
    { node: root, min: -Infinity, max: Infinity },
  ];

  while (queue.length) {
    const top = queue.shift();

    if (!top) return false;

    const node = top.node;

    if (node.val <= top.min || node.val >= top.max) return false;

    if (node.left) {
      queue.push({
        node: node.left,
        min: top.min,
        max: node.val,
      });
    }

    if (node.right) {
      queue.push({
        node: node.right,
        min: node.val,
        max: top.max,
      });
    }
  }

  return true;
}

// @lc code=end
