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
  // compare strings
  return JSON.stringify(p) === JSON.stringify(q);

  //   let pCur = p;
  //   let qCur = q;

  //   const queueP: TreeNode[] = [pCur];
  //   const queueQ: TreeNode[] = [qCur];

  //   while (queueP.length > 0 && queueQ.length > 0) {
  //     let tempP = queueP.shift();
  //     let tempQ = queueQ.shift();

  //     if (
  //       tempP?.val !== tempQ?.val ||
  //       tempP?.left?.val !== tempQ?.left?.val ||
  //       tempP?.right?.val !== tempQ?.right?.val
  //     ) {
  //       return false;
  //     }

  //     if (tempP) queueP.push(tempP?.left);
  //     if (tempQ) queueP.push(tempQ?.left);

  //     if (tempP?.right) queueP.push(tempP?.right);
  //     if (tempQ?.right) queueP.push(tempQ?.right);
  //   }

  //   return true;
}
// @lc code=end
