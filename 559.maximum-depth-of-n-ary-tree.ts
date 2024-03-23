/*
 * @lc app=leetcode id=559 lang=typescript
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number {
  if (!root) return 0;

  let max_depth = 0;
  const traverse = (root: Node, depth: number) => {
    max_depth = Math.max(depth, max_depth);

    for (const child of root.children) {
      traverse(child, depth + 1);
    }
  };

  traverse(root, 1);

  return max_depth;
}
// @lc code=end
