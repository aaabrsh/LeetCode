/*
 * @lc app=leetcode id=589 lang=typescript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
  if (!root) return [];

  const preorder_tree: number[] = [];

  const traverse = (root: Node) => {
    preorder_tree.push(root.val);

    for (const child of root.children) {
      traverse(child);
    }
  };

  traverse(root);

  return preorder_tree;
}
// @lc code=end
