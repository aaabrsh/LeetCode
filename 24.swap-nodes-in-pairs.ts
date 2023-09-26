/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
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

function swapPairs(head: ListNode | null): ListNode | null {
  // without creating a new linked-list
  let cur = head;
  let prev = { val: 0, next: cur };
  let res = prev;

  while (cur && cur.next) {
    let temp = cur.next;
    cur.next = cur.next.next;
    temp.next = cur;
    prev.next = temp;

    prev = cur;
    cur = cur.next;
  }

  return res.next;
}

/*******************FIRST SOLUTION *******************/
// creating a new linked-list
// function swapPairs(head: ListNode | null): ListNode | null {
//   let cur = head;
//   let res: ListNode = { val: 0, next: null };
//   let res_cur = res;

//   if (cur && !cur.next) {
//     return head;
//   }

//   while (cur && cur.next) {
//     res_cur.next = { val: cur.next.val, next: null };
//     res_cur = res_cur.next;
//     res_cur.next = { val: cur.val, next: null };
//     res_cur = res_cur.next;

//     cur = cur.next;
//     cur = cur.next;
//   }

//   // if there is a remaining value in the cur node
//   if (cur) {
//     res_cur.next = { val: cur.val, next: null };
//   }

//   return res.next;
// }

// @lc code=end
