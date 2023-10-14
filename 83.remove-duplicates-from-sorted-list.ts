/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let root = head;
  let cur = root;
  let next = cur.next;

  while (cur) {
    if (cur.val === next?.val) {
      next = next.next;
    } else {
      cur.next = next;
      cur = cur?.next;
      next = cur?.next;
    }
  }

  return root;
}
// @lc code=end
