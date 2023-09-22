/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
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

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let cur = head;
  let res = new ListNode();
  let res_head = res;

  while (cur) {
    if (cur.val !== val) {
      res.next = { val: cur.val, next: null };
      res = res.next;
    }
    cur = cur.next;
  }

  return res_head.next;
}
// @lc code=end
