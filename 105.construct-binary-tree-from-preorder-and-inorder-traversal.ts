/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  /**
   * The first element of a preorder array is always the root.
   * 1. find root from preorder array
   * 2. find that node inside the inorder array
   * 3. split the inorder array into two based on the index of the above number
   * 4. count the number of the left subarray and take that amount from the preorder array
   * 5. treat this new preorder subarray as a tree and start from no-1
   * 6. when finished with left subarray, do the same for the right subarray from no-3
   */

  const root = preorder.shift();
  if (root === undefined) return null;

  const node = new TreeNode(root);

  let pre_left_subtree: number[] = [];
  let in_left_subtree: number[] = [];
  let pre_right_subtree: number[] = [];
  let in_right_subtree: number[] = [];

  // find the root inside inorder array, and divide the two arrays to left and right subarrays
  for (let i = 0; i < inorder.length; i++) {
    if (root === inorder[i]) {
      pre_left_subtree = preorder.slice(0, i);
      in_left_subtree = inorder.slice(0, i);
      pre_right_subtree = preorder.slice(i);
      in_right_subtree = inorder.slice(i + 1);
      break;
    }
  }

  // recursively build the left subtree
  if (pre_left_subtree.length) {
    node.left = buildTree(pre_left_subtree, in_left_subtree);
  }

  // recursively right the left subtree
  if (pre_right_subtree.length) {
    node.right = buildTree(pre_right_subtree, in_right_subtree);
  }

  return node;
}
// @lc code=end
