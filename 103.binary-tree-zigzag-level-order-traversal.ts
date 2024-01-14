/*
 * @lc app=leetcode id=103 lang=typescript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const response: number[][] = [[root.val]];

  let direction: "left" | "right" = "right";

  let parentNodes: TreeNode[] = [root];
  let i = 1;

  while (parentNodes.length > 0) {
    const children = getChildren(parentNodes);

    if (!children.length) break;

    if (direction === "right") {
      // if direction is 'right' then the children are 'left', that is why we reverse
      response[i] = children.map((c) => c.val).reverse();
    } else {
      response[i] = children.map((c) => c.val);
    }

    parentNodes = children;

    direction = getOppDir(direction);
    i++;
  }

  return response;
}

function getChildren(nodes: TreeNode[]) {
  const children: TreeNode[] = [];

  while (nodes.length) {
    const node = nodes.shift();
    if (node.left) children.push(node.left);
    if (node.right) children.push(node.right);
  }

  return children;
}

function getOppDir(direction: "left" | "right") {
  return direction === "left" ? "right" : "left";
}

// @lc code=end
