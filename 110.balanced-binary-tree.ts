/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

function isBalanced(root: TreeNode | null): boolean {
  if (!root || (!root.left && !root.right)) {
    return true;
  }

  const findDepth = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }
    let ld = findDepth(root.left) + 1;
    let rd = findDepth(root.right) + 1;

    if (ld !== rd && Math.abs(ld - rd) !== 1) {
      // throw an error because we can't return false for the outer function from here
      throw new Error("unbalanced");
    }

    return Math.max(ld, rd);
  };

  try {
    const lh = findDepth(root.left) + 1;
    const rh = findDepth(root.right) + 1;

    if (lh === rh || lh === rh + 1 || lh === rh - 1) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}
// @lc code=end
