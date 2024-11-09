/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const queue: { node: TreeNode; depth: number }[] = [{ node: root, depth: 0 }];
  const output: number[][] = [];

  while (queue.length) {
    const cur = queue.shift();

    if (!cur) break;

    if (output[cur.depth]) output[cur.depth].push(cur.node.val);
    else output[cur.depth] = [cur.node.val];

    if (cur.node.left) {
      queue.push({ node: cur.node.left, depth: cur.depth + 1 });
    }
    if (cur.node.right) {
      queue.push({ node: cur.node.right, depth: cur.depth + 1 });
    }
  }

  return output;
}
// @lc code=end
