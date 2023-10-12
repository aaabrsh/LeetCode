/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root || (!root.right && !root.left)) {
    return true;
  } else if ((root.left && !root.right) || (!root.left && root.right)) {
    return false;
  }

  const leftQueue: TreeNode[] = [root.left];
  const rightQueue: TreeNode[] = [root.right];

  // bfs
  while (leftQueue.length > 0 && rightQueue.length > 0) {
    let l = leftQueue.shift();
    let r = rightQueue.shift();

    // if their values are different or
    // if a there is a value on the left side but the corresponding right side doesn't have a value or vice versa
    if (
      l.val !== r.val ||
      (l.left && !r.right) ||
      (!l.left && r.right) ||
      (l.right && !r.left) ||
      (!l.right && r.left)
    )
      return false;

    if (l.left) leftQueue.push(l.left);
    if (l.right) leftQueue.push(l.right);

    if (r.right) rightQueue.push(r.right);
    if (r.left) rightQueue.push(r.left);
  }

  return true;
}
// @lc code=end
