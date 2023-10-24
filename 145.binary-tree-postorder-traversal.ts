/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
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

// goes like left, right, center
function postorderTraversal(root: TreeNode | null): number[] {
  // iterative solution using stack
  if (!root) {
    return [];
  }

  const res: number[] = [];
  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node) {
      res.unshift(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }

  return res;
}

/*******************FIRST SOLUTION *******************/
// recursion
// function firstSolution(root: TreeNode | null): number[] {
//   if (!root) {
//     return [];
//   }

//   const res: number[] = [];

//   const traverse = (root: TreeNode) => {
//     if (root.left) traverse(root.left);
//     if (root.right) traverse(root.right);
//     if (root.val !== null) res.push(root.val);
//   };

//   traverse(root);

//   return res;
// }
// @lc code=end
