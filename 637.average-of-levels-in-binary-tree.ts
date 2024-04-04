/*
 * @lc app=leetcode id=637 lang=typescript
 *
 * [637] Average of Levels in Binary Tree
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

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    let sum = 0;
    let level_nodes = queue.length;

    for (let i = 0; i < level_nodes; i++) {
      let cur = queue.shift() as TreeNode;
      sum += cur.val as number;

      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }

    res.push(sum / level_nodes);
  }

  return res;
}

// @lc code=end
