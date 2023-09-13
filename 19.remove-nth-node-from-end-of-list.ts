/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let index = getLength(head) - n;
  if (index === 0) {
    return head.next;
  }

  let cur: ListNode | null = head;
  let newHead: ListNode | null = cur;
  let i = 1;

  while (cur.next != null) {
    if (i === index) {
      cur.next = cur.next.next;
      break;
    } else {
      cur = cur.next;
    }
    i++;
  }

  return newHead;
}

function getLength(temp: ListNode | null): number {
  let count = 0;
  while (temp != null) {
    count++;
    temp = temp.next;
  }
  return count;
}
// @lc code=end
