/*
 * @lc app=leetcode id=671 lang=typescript
 *
 * [671] Second Minimum Node In a Binary Tree
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

function findSecondMinimumValue(root: TreeNode | null): number {
  if (!root) return -1;

  let min = Infinity;

  const stack: TreeNode[] = [root];

  while (stack.length) {
    let top = stack.pop() as TreeNode;

    if (top.left && top.right) {
      if (top.val === top.left.val && top.val === top.right.val) {
        stack.push(top.left);
        stack.push(top.right);
        continue;
      }

      if (top.val !== top.left.val) {
        stack.push(top.right);
        min = Math.min(min, top.left.val);

        continue;
      }

      if (top.val !== top.right.val) {
        stack.push(top.left);
        min = Math.min(min, top.right.val);
        continue;
      }
    }
  }

  return min === Infinity ? -1 : min;
}

// @lc code=end
