/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let res = new ListNode(-1, head);
  let start = res;

  let reversed_tail: ListNode | null = null;
  let reversed_head: ListNode | null = null;
  let counter = 0;

  let cur = res.next;
  while (cur) {
    let temp = new ListNode(cur.val, reversed_head);
    reversed_head = temp;
    if (!reversed_tail) reversed_tail = reversed_head;
    counter++;

    if (counter === k) {
      if (reversed_tail && reversed_head) {
        start.next = reversed_head;
        reversed_tail.next = cur.next;
        start = reversed_tail;
      }

      reversed_tail = null;
      reversed_head = null;
      counter = 0;
    }

    cur = cur.next;
  }

  return res.next;
}

// @lc code=end
