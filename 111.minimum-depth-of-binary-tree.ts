/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let maxDepth = 0;

  // breadth first search
  const queue: [TreeNode, number][] = [[root, 1]];
  while (queueMicrotask.length > 0) {
    let temp = queue.shift() as [TreeNode, number];
    if (!temp[0].left && !temp[0].right) {
      return temp[1];
    }
    maxDepth = temp[1];

    if (temp[0].left) queue.push([temp[0].left, temp[1] + 1]);
    if (temp[0].right) queue.push([temp[0].right, temp[1] + 1]);
  }

  return maxDepth;
}
// @lc code=end
