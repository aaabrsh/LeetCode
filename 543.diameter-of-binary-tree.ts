/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  /**
   * we use Depth First Search.
   * For every node, find the maximum depth both in the left and right directions
   * we can find its diameter by adding left and right depth, then we compare this diameter with the largest diameter we have found so far
   * The maximum diameter doesn't necessarily pass through root.(it might be found in the left or right sub-tree).
   * That is why, we treat every node as root and calculate the depth of it's right and left sub-trees and find its own diameter. (without considering the nodes before it)
   * Of all the diameters we have found for each node, we take the maximum one and return it
   */
  if (!root) return 0;

  let max = 0;

  function traverse(node: TreeNode): number {
    let left = 0;
    let right = 0;

    if (node.left) left = traverse(node.left) + 1;
    if (node.right) right = traverse(node.right) + 1;

    const diameter = left + right;
    max = Math.max(max, diameter);

    const longer_leg = Math.max(left, right);

    // this will be used to calculate the diameter on its parent together with the longer_leg of the other side
    return longer_leg;
  }

  traverse(root);
  return max;
}

// @lc code=end
