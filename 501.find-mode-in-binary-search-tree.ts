/*
 * @lc app=leetcode id=501 lang=typescript
 *
 * [501] Find Mode in Binary Search Tree
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

function findMode(root: TreeNode | null): number[] {
  const freqHash: { [key: number]: number } = {};

  if (!root) return [];

  let maximumFrequency: number = 0;
  let mostFrequent: number[] = [];

  // build the frequency hash, and at the same time keep track of the most frequent elements
  const traverse = (root: TreeNode) => {
    if (freqHash[root.val]) freqHash[root.val]++;
    else freqHash[root.val] = 1;

    if (freqHash[root.val] > maximumFrequency) {
      maximumFrequency = freqHash[root.val];
      mostFrequent = [root.val];
    } else if (freqHash[root.val] === maximumFrequency) {
      mostFrequent.push(root.val);
    }

    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
  };

  traverse(root);

  return mostFrequent;
}
// @lc code=end
