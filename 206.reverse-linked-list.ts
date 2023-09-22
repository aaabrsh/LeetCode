/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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

function reverseList(head: ListNode | null): ListNode | null {
  let cur = head;
  let prev = null;
  let next = null;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

/*******************FIRST SOLUTION *******************/
// collect all the values, and create a new list by reversing the values
// function secondSolution(head: ListNode | null): ListNode | null {
//   const values: number[] = [];
//   let cur = head;

//   while (cur) {
//     values.push(cur.val);
//     cur = cur.next;
//   }

//   let res = new ListNode();
//   const res_head = res;
//   for (let i = values.length - 1; i >= 0; i--) {
//     res.next = { val: values[i], next: null };
//     res = res.next;
//   }

//   return res_head.next;
// }
// @lc code=end
