/*
 * @lc app=leetcode id=222 lang=typescript
 *
 * [222] Count Complete Tree Nodes
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

function countNodes(root: TreeNode | null): number {
  // <O(n) solution
  /**
   * The number of nodes in a perfect binary tree can be calculate using (2^d)-1 where d is the depth tree.
   * In this approach, instead of exploring all nodes, we instead compare the depth of the last left and right nodes
   * and if those are equal, we have a perfect binary tree, if depth of the last left node is greater than the depth
   * of the last right node then the tree/sub-tree is not a perfect binary tree
   */

  let ld = 0;
  let rd = 0;

  // find the last left node
  let copy = root;
  while (copy) {
    ld++;
    copy = copy.left;
  }
  // find the last right node
  copy = root;
  while (copy) {
    rd++;
    copy = copy.right;
  }

  if (ld === rd) {
    return Math.pow(2, ld) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
}

/*******************FIRST SOLUTION *******************/
// O(n) solution
// function countNodes(root: TreeNode | null): number {
//   if (!root) return 0;

//   return countNodes(root.left) + countNodes(root.right) + 1;
// }
// @lc code=end
