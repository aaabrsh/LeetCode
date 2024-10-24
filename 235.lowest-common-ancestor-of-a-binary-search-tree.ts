/*
 * @lc app=leetcode id=235 lang=typescript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  /**We can use the property of a binary search tree
   * where the left node is less than the parent and
   * the right node is greater than the parent */
  while (true) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      return root;
    }
  }
}

/*******************FIRST SOLUTION *******************/
// function lowestCommonAncestor(
//   root: TreeNode | null,
//   p: TreeNode | null,
//   q: TreeNode | null
// ): TreeNode | null {
//   /**
//    * find ancestors of both p and q
//    * match the two ancestors to find the lowest common ancestor
//    */

//   if (!root || !p || !q) return null;

//   const dfs = (
//     node: TreeNode,
//     target: TreeNode,
//     path: TreeNode[]
//   ): TreeNode[] | null => {
//     path.push(node);

//     if (node.val === target.val) return path;

//     if (node.left) {
//       const left = dfs(node.left, target, path);
//       if (left) return left;
//     }

//     if (node.right) {
//       const right = dfs(node.right, target, path);
//       if (right) return right;
//     }

//     path.pop();

//     return null;
//   };

//   let p_ancestors: TreeNode[] | null = dfs(root, p, []);
//   let q_ancestors: TreeNode[] | null = dfs(root, q, []);

//   if (!p_ancestors || !q_ancestors) return null;

//   let lca: TreeNode | null = null; // lowest common ancestor
//   let q_cur = q_ancestors.shift();
//   let p_cur = p_ancestors.shift();

//   // find the last/lowest common ancestor between the two ancestors
//   while (q_cur && p_cur) {
//     if (q_cur.val === p_cur.val) {
//       lca = q_cur;
//       q_cur = q_ancestors.shift();
//       p_cur = p_ancestors.shift();
//     } else {
//       return lca;
//     }
//   }

//   return lca;
// }

// @lc code=end
