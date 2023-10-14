/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  } else if (!p || !q) {
    return false;
  }

  const queueP: TreeNode[] = [p];
  const queueQ: TreeNode[] = [q];

  // bfs
  while (queueP.length > 0) {
    let tempP = queueP.shift();
    let tempQ = queueQ.shift();

    // if their values are different or
    // if the left or right child is null while the other has value
    if (
      tempP.val !== tempQ.val ||
      (tempP.left && !tempQ.left) ||
      (!tempP.left && tempQ.left) ||
      (tempP.right && !tempQ.right) ||
      (!tempP.right && tempQ.right)
    ) {
      return false;
    }

    if (tempP.left) queueP.push(tempP.left);
    if (tempP.right) queueP.push(tempP.right);
    if (tempQ.left) queueQ.push(tempQ.left);
    if (tempQ.right) queueQ.push(tempQ.right);
  }

  return true;
}

/*******************FIRST SOLUTION *******************/
// comapre the two as strings
// function firstSolution(p: TreeNode | null, q: TreeNode | null): boolean {
//   return JSON.stringify(p) === JSON.stringify(q);
// }
// @lc code=end
