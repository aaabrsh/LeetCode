/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  const map = new Map();

  let cur = head;

  while (cur) {
    const newNode = new Node(cur.val);
    map.set(cur, newNode);
    cur = cur.next;
  }

  const copy: Node | null = map.get(head);
  let copy_cur = copy;
  cur = head;

  while (cur) {
    if (cur.random) {
      copy_cur.random = map.get(cur.random);
    }
    if (cur.next) {
      copy_cur.next = map.get(cur.next);
      copy_cur = copy_cur.next;
    }
    cur = cur.next;
  }

  return copy;
}

// @lc code=end
