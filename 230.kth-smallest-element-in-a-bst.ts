/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
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

function kthSmallest(root: TreeNode | null, k: number): number {
  /** Since the tree is a binary search tree, we know the smallest number is
   * at the bottom left of the tree. starting from the bottom left, we can go
   * back k steps to find the kth smallest number
   */

  const dfs = (node: TreeNode, temp: number[]) => {
    if (!node) return;

    // first go to bottom left of the tree
    if (node.left) dfs(node.left, temp);

    // use temp[0] to trace k steps back from the bottom left node
    temp[0]--;
    if (temp[0] === 0) {
      // when temp[0] is 0, that means, we have traced k steps back.
      // Put the current number on temp[1] and return it to user
      temp[1] = node.val;
      return;
    }

    if (node.right) dfs(node.right, temp);
  };

  let temp = [k, 0];
  root && dfs(root, temp);
  return temp[1];
}
// @lc code=end
