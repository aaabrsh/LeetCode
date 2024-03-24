/*
 * @lc app=leetcode id=572 lang=typescript
 *
 * [572] Subtree of Another Tree
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root || !subRoot) return false;

  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const top = queue.pop();
    if (!top) return false;

    if (subRoot.val === top.val) {
      const isMatch = compare(top, subRoot);

      if (isMatch) return true;
    }

    if (top.left) queue.push(top.left);
    if (top.right) queue.push(top.right);
  }

  return false;
}

function compare(root1: TreeNode, root2: TreeNode): boolean {
  return JSON.stringify(root1) === JSON.stringify(root2);
}

// @lc code=end
