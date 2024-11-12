/*
 * @lc app=leetcode id=86 lang=typescript
 *
 * [86] Partition List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return null;

  let insert: ListNode = new ListNode(); // pointer to the insertion point
  insert.next = head;

  // find the target node
  while (insert.next && insert.next.val < x) {
    insert = insert.next;
  }

  if (!insert) return null;

  let cur = insert;
  while (cur.next) {
    // find a node less than x that comes after x
    if (cur.next.val < x) {
      // remove the node and insert if after "insert" node
      let node = cur.next;
      cur.next = cur.next.next;
      node.next = insert.next;
      insert.next = node;
      insert = insert.next;

      if (node.next?.val === head.val) {
        head = node; // if the insertion was made before head, move head to the start of the list
      }
    } else {
      cur = cur.next;
    }
  }

  return head;
}
// @lc code=end

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
