/*
 * @lc app=leetcode id=590 lang=typescript
 *
 * [590] N-ary Tree Postorder Traversal
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

function postorder(root: Node | null): number[] {
  if (!root) return [];

  const postorder_tree: number[] = [];

  const traverse = (root: Node) => {
    for (const child of root.children) {
      traverse(child);
    }
    postorder_tree.push(root.val);
  };

  traverse(root);

  return postorder_tree;
}
// @lc code=end
