/*
 * @lc app=leetcode id=700 lang=typescript
 *
 * [700] Search in a Binary Search Tree
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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  // use depth first search
  let cur = root;

  if (!cur) {
    return null;
  } else if (cur.val === val) {
    return cur;
  }

  if (cur.left) {
    let left = searchBST(cur.left, val);
    if (left) return left;
  }

  if (cur.right) {
    let right = searchBST(cur.right, val);
    if (right) return right;
  }

  return null;
}
// @lc code=end
